import { useHistory } from 'react-router-dom'
import { Form, Input, Button, Space } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
}
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 }
}

const Login = () => {
  let history = useHistory()

  const onFinish = (values) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Form
      {...layout}
      name="basic"
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
          <Button
            type="primary"
            htmlType="submit"
            onClick={() => history.push('/dashboard')}>
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
