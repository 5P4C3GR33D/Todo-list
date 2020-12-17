import fire from '../config'

const db = fire.firestore()
const ref = db.collection('tasks')
const userRef = db.collection('users')

const rootReducer = (state, action) => {
  switch (action.type) {
    case 'REGISTER':
      const documentUser = userRef.doc().id
      userRef.doc(documentUser).set({
        id: documentUser,
        email: action.payload.mail,
        password: action.payload.pass
      })
      return state
    case 'ADD_TODO':
      const documentTask = ref.doc().id
      ref.doc(documentTask).set({
        id: documentTask,
        userID: documentUser,
        text: action.payload,
        creationDate: new Date(),
        status: {
          done: false,
          important: false,
          pinned: false
        }
      })
      return state
    case 'DELETE_TODO': {
      ref.doc(action.payload).delete()
      return state
    }
    case 'SET_DONE':
      ref.doc(action.payload.id).update({
        status: {
          ...action.payload.status,
          done: !action.payload.status.done
        }
      })
      return state
    case 'IMPORTANT_TODO':
      ref.doc(action.payload.id).update({
        status: {
          ...action.payload.status,
          important: !action.payload.status.important
        }
      })
      return state
    case 'PINNED_TODO':
      ref.doc(action.payload.id).update({
        status: {
          ...action.payload.status,
          pinned: !action.payload.status.pinned
        }
      })
      return state
    case 'CHANGE_FILTER':
      return {
        ...state,
        filter: action.payload
      }
    case 'SEARCH':
      return {
        ...state,
        query: action.payload
      }
    default:
      return state
  }
}

export default rootReducer
