import { Row, Col } from 'antd'
import { Filter } from './Filter'
import { Search } from './Search'
import { AddTodo } from './AddTodo'
import { TodoList } from './TodoList'

const Dashboard = () => {
  return (
    <>
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
