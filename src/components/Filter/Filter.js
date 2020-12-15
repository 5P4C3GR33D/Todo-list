import firebase from '../../config'
import { useEffect, useState } from 'react'
import { useStoreContext } from 'context'
import { Row, Col, Button, Typography } from 'antd'

const buttons = [
  { text: 'All', active: 'primary' },
  { text: 'Active', active: 'primary' },
  { text: 'Done', active: 'primary' }
]

const Filter = () => {
  const { dispatch } = useStoreContext()
  const [firebaseTasks, setFirebaseTasks] = useState([])
  const [activeButton, setActiveButton] = useState(buttons[0].text)

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection('tasks')
      .orderBy('creationDate')
      .onSnapshot((snapshot) => {
        setFirebaseTasks(
          snapshot.docs.map((doc) => ({
            ...doc.data()
          }))
        )
      })
    return () => unsubscribe()
  }, [])

  const doneTasks = firebaseTasks.filter(({ status }) => status.done)

  return (
    <>
      <Row>
        <Col flex="auto">
          <Typography.Title level={4}>
            {doneTasks.length} from {firebaseTasks.length} are done
          </Typography.Title>
        </Col>
        <Col flex="none">
          {buttons.map(({ text, active }) => (
            <Button
              key={text}
              type={activeButton === text ? active : false}
              size="large"
              onClick={() => {
                setActiveButton(text)
                dispatch({ type: 'CHANGE_FILTER', payload: text.toLowerCase() })
              }}>
              {text}
            </Button>
          ))}
        </Col>
      </Row>
    </>
  )
}

export default Filter
