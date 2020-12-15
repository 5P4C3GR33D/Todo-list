import { Table, Typography } from 'antd'
import firebase from '../../config'
import { useEffect, useState } from 'react'

const db = firebase.firestore()
const ref = db.collection('tasks')

const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    filters: [
      {
        text: 'Hide Completed',
        value: 'hide'
      }
    ],
    onFilter: (_, record) => record.completed === 'false',
    render: (text, record) => {
      return <Typography.Title record={record}>{text}</Typography.Title>
    }
  }
]

const TodoList = () => {
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

  return <Table columns={columns} dataSource={firebaseTasks} />
}

export default TodoList
