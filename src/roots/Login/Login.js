import { useHistory } from 'react-router-dom'
import { Form, Input, Button, Space } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { useCallback } from 'react'
import fire from '../../config'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
}
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 }
}

const Login = () => {
  let history = useHistory()

  const onFinish = useCallback(
    async (event) => {
      event.preventDefault()
      const { email, password } = event.target.elements
      try {
        await fire
          .auth()
          .signInWithEmailAndPassword(email.value, password.value)
        history.push('/dashboard')
      } catch (error) {
        console.log('Failed db connection: ', error)
      }
    },
    [history]
  )

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Form
      {...layout}
      name="email"
      size="large"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}>
      <Form.Item
        label="Email address"
        name="username"
        rules={[
          { required: true, message: 'Please input Email address.' },
          { type: 'email', message: 'The input is not valid E-mail.' }
        ]}>
        <Input prefix={<UserOutlined />} />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input password.' }]}>
        <Input.Password prefix={<LockOutlined />} />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Space>
          <Button type="primary" htmlType="submit">
            Sign in
          </Button>
          <Button
            htmlType="button"
            onClick={() => history.push('/registration')}>
            Sign up
          </Button>
          <Button
            type="link"
            htmlType="button"
            onClick={() => history.push('/recovery')}>
            Forgot password?
          </Button>
        </Space>
      </Form.Item>
    </Form>
  )
}

export default Login
