import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCVgn0gdIjUCfgdKk5qEMI5HOJv7ZZepVY',
  authDomain: 'space-ant.firebaseapp.com',
  projectId: 'space-ant',
  storageBucket: 'space-ant.appspot.com',
  messagingSenderId: '862415853821',
  appId: '1:862415853821:web:83447fec32d084069b8694'
}

export default firebase.initializeApp(firebaseConfig)
