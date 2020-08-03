import React from 'react'
import PropTypes from 'prop-types'

import StyledChatBubble, { Bubble, BubbleTip, MessageText, Time } from './style'

import { ReactComponent as BubbleTipIcon } from 'assets/icons/bubbleTip.svg'

/**
 * 气泡组件
 * @param children 消息文本
 * @param type 消息发送人 none || mine
 * @param time 发送时间
 * @param rest
 * @returns {JSX.Element}
 * @constructor
 */
function ChatBubble({ children, type, time, ...rest }) {
  return (
    <StyledChatBubble type={type} {...rest}>
      <Bubble>
        <BubbleTip icon={BubbleTipIcon} width={40} height={28} color="white" />
        <MessageText>{children}</MessageText>
      </Bubble>
      <Time>{time}</Time>
    </StyledChatBubble>
  )
}

ChatBubble.propTypes = {
  children: PropTypes.any,
  type: PropTypes.oneOf(['mine']),
  time: PropTypes.string
}

export default ChatBubble
