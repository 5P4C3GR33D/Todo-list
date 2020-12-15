import { useHistory } from 'react-router-dom'
import { Form, Input, Button, Space, notification } from 'antd'
import { SmileOutlined } from '@ant-design/icons'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
}
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 }
}

const Recovery = () => {
  let history = useHistory()

  const onFinish = (values) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  const openNotification = () => {
    notification.open({
      placement: 'bottomRight',
      message: 'Check your mailbox for recovery link!',
      icon: <SmileOutlined style={{ color: '#b5e625' }} />
    })
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
        <Input placeholder="Enter your e-mail adress" />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Space>
          <Button type="primary" htmlType="submit" onClick={openNotification}>
            Send password reset email
          </Button>
          <Button type="button" onClick={() => history.push('/login')}>
            Sign in
          </Button>
        </Space>
      </Form.Item>
    </Form>
  )
}

export default Recovery
