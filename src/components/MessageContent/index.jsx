/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import PropTypes from 'prop-types'
import { useSpring } from 'react-spring'

import StyledMessageContent, {
  Messages,
  MyChatBubble,
} from './style'
import TitleBar from '../../components/TitleBar'
import ChatBubble from '../../components/ChatBubble'
import VoiceMessage from '../../components/VoiceMessage'
import Emoji from '../../components/Emoji'
import Footer from '../../components/Footer'

import face from '../../assets/images/face-male-2.jpg'

function MessageContent({ type, children, ...rest }) {
  // 标题栏动画
  const tBarAnimeProps = useSpring({
    opacity: 1,
    transform: 'translate3D(0px, 0px, 0px)',
    from: { opacity: 0, transform: 'translate3d(0px, -50px, 0px)' }, // 起始位置
    delay: 400,
  })

  // 聊天内容区域动画
  const conversationAnimeProps = useSpring({
    opacity: 1,
    transform: 'translate3D(0px, 0px, 0px)',
    from: { opacity: 0, transform: 'translate3d(50px, 0px, 0px)' }, // 起始位置
    delay: 400,
  })

  // 底部栏动画
  const footerAnimeProps = useSpring({
    opacity: 1,
    transform: 'translate3D(0px, 0px, 0px)',
    from: { opacity: 0, transform: 'translate3d(0px, 50px, 0px)' }, // 起始位置
    delay: 550,
  })

  return (
    <StyledMessageContent {...rest}>
      <TitleBar
        avatarSrc={face}
        name="小土豆"
        status="online"
        time="3小时前"
        animeProps={tBarAnimeProps}
      />
      <Messages style={conversationAnimeProps}>
        <ChatBubble time="昨天 下午14:26">Hi 醉渔，忙什么呢</ChatBubble>
        <MyChatBubble time="昨天 下午14:28">
          Hello 啊！最新就是一直在加班改 bug，然后 怼产品，怼 UI，各种怼！
        </MyChatBubble>
        <ChatBubble time="昨天 下午16:30">
          <VoiceMessage time="01:24" />
        </ChatBubble>
        <MyChatBubble time="昨天 下午16:30">
          明天约一把王者荣耀，不连赢5把不罢休 🤘
          <Emoji label="smile">😊</Emoji>
        </MyChatBubble>
      </Messages>
      <Footer animeProps={footerAnimeProps} />
    </StyledMessageContent>
  )
}

MessageContent.propTypes = {
  children: PropTypes.any,
}

export default MessageContent
