import { List } from 'antd'
import { TodoListItem } from '../TodoListItem'
import { useEffect, useState } from 'react'
import { useStoreContext } from 'context'
import firebase from '../../config'

const db = firebase.firestore()
const ref = db.collection('tasks')

const TodoList = () => {
  const { store } = useStoreContext()
  const [firebaseTasks, setFirebaseTasks] = useState([])

  useEffect(() => {
    const unsubscribe = ref.orderBy('creationDate').onSnapshot((snapshot) => {
      setFirebaseTasks(
        snapshot.docs.map((doc) => ({
          ...doc.data()
        }))
      )
    })
    return () => unsubscribe()
  }, [])

  const filter = (tasks) => {
    if (store.filter === 'all') {
      return tasks
    }
    if (store.filter === 'active') {
      return tasks.filter(({ status }) => !status.done)
    }
    if (store.filter === 'done') {
      return tasks.filter(({ status }) => status.done)
    }
    if (store.query && store.query.length > 0) {
      return tasks.filter((item) => {
        return item.text.toLowerCase().indexOf(store.query.toLowerCase()) > -1
      })
    }
  }

  return (
    <List
      bordered
      style={
        firebaseTasks.length > 5
          ? { overflowY: 'scroll', maxHeight: '700px' }
          : {}
      }
      dataSource={filter(
        firebaseTasks.sort((a, b) => b.status.pinned - a.status.pinned)
      )}
      renderItem={(item) => <TodoListItem {...item} />}
    />
  )
}

export default TodoList
