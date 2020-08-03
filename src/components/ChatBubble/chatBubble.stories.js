import React from 'react'

import ChatBubble from '.'
import VoiceMessage from '../VoiceMessage'
import Emoji from '../Emoji'

export default {
  title: 'UI 组件/ChatBubble',
  component: ChatBubble,
  decorators: [(storyFn) => <div style={{ padding: '24px' }}>{storyFn()}</div>]
}

export const FromOther = () => (
  <ChatBubble time="昨天 14:26">这是一条其他人发送的消息</ChatBubble>
)

export const Mine = () => (
  <ChatBubble time="昨天 14:26" type="mine">
    这是一条我发送的消息<Emoji label="smile">😄</Emoji>
  </ChatBubble>
)

export const VoiceMessageType = () => (
  <ChatBubble time="昨天 15:00">
    <VoiceMessage time="01:24" />
  </ChatBubble>
)

export const VoiceMessageTypeMine = () => (
  <ChatBubble type="mine" time="昨天 15:00">
    <VoiceMessage type="mine" time="01:24" />
  </ChatBubble>
)
