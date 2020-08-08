import React from 'react'
import PropTypes from 'prop-types'

import StyledConversation, { Conversations, MyChatBubble } from './style'
import TitleBar from '../TitleBar'
import ChatBubble from '../ChatBubble'
import VoiceMessage from '../VoiceMessage'
import Emoji from '../Emoji'
import Footer from '../Footer'

import face from '../../assets/images/face-male-2.jpg'

function Conversation({ children, ...rest }) {
  return (
    <StyledConversation {...rest}>
      <TitleBar avatarSrc={face} name="小土豆" status="online" time="3小时前" />
      <Conversations>
        <ChatBubble time="昨天 下午14:26">Hi 醉渔，忙什么呢</ChatBubble>
        <MyChatBubble time="昨天 下午14:28">
          Hello 啊！最新就是一直在加班改 bug，然后 怼产品，怼 UI，各种怼！
        </MyChatBubble>
        <ChatBubble time="昨天 下午16:30">
          <VoiceMessage time="01:24" />
        </ChatBubble>
        {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
        <MyChatBubble time="昨天 下午16:30">
          明天约一把王者荣耀，不连赢5把不罢休 🤘
          <Emoji label="smile">😊</Emoji>
        </MyChatBubble>
      </Conversations>
      <Footer />
    </StyledConversation>
  )
}

Conversation.propTypes = {
  children: PropTypes.any,
}

export default Conversation
