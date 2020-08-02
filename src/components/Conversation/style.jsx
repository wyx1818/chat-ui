import styled from 'styled-components'
import ChatBubble from '../ChatBubble'

// 用于布局消息气泡
const Conversations = styled.div`
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  overflow-y: auto;
  flex: 1;

  & > * {
    margin: 10px 0;
  }
`

// 调整我发送的消息
const MyChatBubble = styled(ChatBubble).attrs({ type: 'mine' })`
  align-self: flex-end;
`

// 整体容器
const StyledConversation = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  border: 1px solid ${ ({ theme}) => theme.grayBorder };

  & > *:last-child {
    align-self: end;
  }

`

export default StyledConversation

export { Conversations, MyChatBubble}
