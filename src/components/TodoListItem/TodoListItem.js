import { List, Space, Typography, Checkbox } from 'antd'
import { useStoreContext } from '../../context'
import { LeftOutlined } from '@ant-design/icons'

const { Item } = List
const { Text } = Typography

const TodoListItem = (props) => {
  const { id, text, status } = props
  const { dispatch } = useStoreContext()

  return (
    <Item>
      <Space>
        <Checkbox
          checked={status.done}
          onClick={() => dispatch({ type: 'SET_DONE', payload: id })}
        />
        <Text ellipsis={true}>{text}</Text>
      </Space>
      <LeftOutlined onClick={() => console.log('Clicked')} />
    </Item>
  )
}

export default TodoListItem