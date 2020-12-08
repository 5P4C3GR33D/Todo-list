import { Tag, List, Space, Typography, Checkbox } from 'antd'
import { useStoreContext } from '../../context'
import { DropDown } from '../DropDown'
import { PaperClipOutlined, ExclamationOutlined } from '@ant-design/icons'

const { Item } = List
const { Text } = Typography

const TodoListItem = (props) => {
  const { id, text, status } = props
  const { dispatch } = useStoreContext()

  return (
    <Item>
      <Space style={{ width: '100%' }}>
        <Checkbox
          checked={status.done}
          onClick={() =>
            dispatch({ type: 'SET_DONE', payload: { id, status } })
          }
        />
        <Text ellipsis={true}>{text}</Text>
      </Space>
      <Tag color={status.pinned ? '#1890ff' : ''}>
        <PaperClipOutlined />
      </Tag>
      <Tag color={status.important ? '#f50' : ''}>
        <ExclamationOutlined />
      </Tag>
      <DropDown id={id} status={status} />
    </Item>
  )
}

export default TodoListItem
