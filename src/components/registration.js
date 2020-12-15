import { useHistory } from 'react-router-dom'
import { Form, Input, Button, Space } from 'antd'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
}
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 }
}

const Registration = () => {
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
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          { required: true, message: 'Please input password.' },
          { min: 6, message: 'The password is weak.' }
        ]}>
        <Input.Password />
      </Form.Item>

      {/* <Form.Item
        label="Repeat password"
        name="password"
        rules={[{ required: true, message: "Passwords didn't match." }]}>
        <Input.Password />
      </Form.Item> */}

      <Form.Item {...tailLayout}>
        <Space>
          <Button
            type="primary"
            htmlType="submit"
            onClick={() => history.push('/dashboard')}>
            Create account
          </Button>
          <Button
            type="button"
            htmlType="submit"
            onClick={() => history.push('/recovery')}>
            Sign in
          </Button>
        </Space>
      </Form.Item>
    </Form>
  )
}
export default Registration
