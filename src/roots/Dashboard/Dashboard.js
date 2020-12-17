import { Row, Col, Button } from 'antd'
import { Filter } from '../../components/Filter'
import { Search } from '../../components/Search'
import { AddTodo } from '../../components/AddTodo'
import { TodoList } from '../../components/TodoList'
import fire from '../../config'

const Dashboard = () => {
  return (
    <>
      <Button
        type="danger"
        onClick={() => {
          fire.auth().signOut()
          //console.log('Signed out')
        }}>
        Sign out
      </Button>
      <Row gutter={[0, 8]}>
        <Col style={{ width: '100%' }}>
          <Filter />
        </Col>
      </Row>
      <Row gutter={[0, 8]}>
        <Col flex="auto">
          <Search />
        </Col>
      </Row>
      <Row gutter={[0, 8]}>
        <Col flex="auto">
          <TodoList />
        </Col>
      </Row>
      <Row>
        <Col flex={1}>
          <AddTodo />
        </Col>
      </Row>
    </>
  )
}

export default Dashboard
