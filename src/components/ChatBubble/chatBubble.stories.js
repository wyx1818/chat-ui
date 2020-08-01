import React from 'react'

import ChatBubble from '.'

export default {
  title: 'UI 组件/ChatBubble',
  component: ChatBubble,
  decorators: [storyFn => <div style={ { padding: '24px' } }>{ storyFn() }</div>]
}

export const FromOther = () => <ChatBubble time="昨天 14:26">这是一条其他人发送的消息</ChatBubble>

export const Mine = () => <ChatBubble time="昨天 14:26" type="mine">这是一条我发送的消息</ChatBubble>
