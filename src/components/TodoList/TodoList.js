import { List } from 'antd'

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Racing car sprays burning fuel into crowd.',
  'Racing car sprays burning fuel into crowd.',
  'Racing car sprays burning fuel into crowd.',
  'Racing car sprays burning fuel into crowd.',
  'Racing car sprays burning fuel into crowd.',
  'Racing car sprays burning fuel into crowd.',
  'Racing car sprays burning fuel into crowd.',
  'Racing car sprays burning fuel into crowd.',
  'Racing car sprays burning fuel into crowd.',
  'Racing car sprays burning fuel into crowd.',
  'Racing car sprays burning fuel into crowd.',
  'Racing car sprays burning fuel into crowd.',
  'Racing car sprays burning fuel into crowd.',
  'Racing car sprays burning fuel into crowd.',
  'Racing car sprays burning fuel into crowd.',
  'Racing car sprays burning fuel into crowd.',
  'Racing car sprays burning fuel into crowd.',
  'Racing car sprays burning fuel into crowd.',
  'Racing car sprays burning fuel into crowd.',
  'Racing car sprays burning fuel into crowd.',
  'Racing car sprays burning fuel into crowd.',
  'Racing car sprays burning fuel into crowd.',
  'Racing car spraDys burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.'
]

const TodoList = () => {
  let style = {}
  if (data.length > 10) {
    style = { overflowY: 'scroll', maxHeight: '400px' }
  }
  return (
    <List
      size="large"
      bordered
      style={{ ...style, maxWidth: '450px', alignItems: 'center' }}
      dataSource={data}
      renderItem={(item) => <List.Item>{item}</List.Item>}
    />
  )
}

export default TodoList