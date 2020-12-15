import { useEffect, useState } from 'react'
import { Col, Row, Typography } from 'antd'
import { Filter } from 'components/Filter'
import firebase from '../../config'

const { Title, Text } = Typography

const Header = () => {
  const [firebaseTasks, setFirebaseTasks] = useState([])

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
    <Row>
      <Col flex="auto">
        <Title level={4}>
          {doneTasks.length} from {firebaseTasks.length} are done
        </Title>
      </Col>
      <Col flex="none">
        <Filter />
      </Col>
    </Row>
  )
}

export default Header
