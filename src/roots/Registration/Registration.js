import { useHistory } from 'react-router-dom'
import { Form, Input, Button, Space } from 'antd'
import { useCallback } from 'react'
import fire from '../../config'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
}
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 }
}

const Registration = () => {
  const history = useHistory()
  const [form] = Form.useForm()

  const onFinish = useCallback(
    async (event) => {
      //event.preventDefault()
      const { email, password } = event.target.email
      try {
        await fire
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value)
        history.push('/')
      } catch (error) {
        console.log('Failed db connection: ', error)
      }
    },
    [history]
  )

  const onFinishFailed = (errorInfo) => {
    console.log('Failed form: ', errorInfo)
  }

  return (
    <Form
      {...layout}
      form={form}
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

      <Form.Item {...tailLayout}>
        <Space>
          <Button type="primary" htmlType="submit">
            Create account
          </Button>
          <Button type="button" onClick={() => history.push('/recovery')}>
            Sign in
          </Button>
        </Space>
      </Form.Item>
    </Form>
  )
}
export default Registration
