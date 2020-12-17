import 'antd/dist/antd.css'
import { Row, Col, Typography } from 'antd'
import { Login, Recovery, Dashboard, Registration } from '../roots'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <Row justify="center">
      <Col xs={22} sm={22} md={14} lg={10} xl={9} xxl={8}>
        <Row align="middle">
          <Col flex="auto" align="center">
            <Typography.Title>Todo List</Typography.Title>
          </Col>
        </Row>
        <Row gutter={[0, 8]}>
          <Col flex="auto">
            <Router>
              <Switch>
                <Route exact path="/">
                  <Dashboard />
                </Route>
                <Route exact path="/login">
                  <Login />
                </Route>
                <Route exact path="/recovery">
                  <Recovery />
                </Route>
                <Route exact path="/dashboard">
                  <Dashboard />
                </Route>
                <Route exact path="/registration">
                  <Registration />
                </Route>
              </Switch>
            </Router>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default App
