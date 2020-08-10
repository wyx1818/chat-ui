import React from 'react'
import PropTypes from 'prop-types'

import StyledMessageCard, {
  Message,
  MessageText,
  Name,
  Status,
  Time,
  UnreadBadge,
} from './style'
import Avatar from '../Avatar'
import Icon from '../Icon'
import { useTheme } from 'styled-components'

import { ReactComponent as Replied } from 'assets/icons/replied.svg'

/**
 * 消息卡片
 * @param avatarSrc 头像地址
 * @param avatarStatus 头像状态
 * @param statusText 状态文本
 * @param name 昵称
 * @param time 时间
 * @param message 消息
 * @param unreadCount 未读消息
 * @param active 激活状态
 * @param replied 已回复
 * @param children
 * @param rest
 * @returns {JSX.Element}
 * @constructor
 */
function MessageCard({
  avatarSrc,
  avatarStatus,
  statusText,
  name,
  time,
  message,
  unreadCount,
  active,
  replied,
  children,
  ...rest
}) {
  const theme = useTheme()

  return (
    <StyledMessageCard active={active} {...rest}>
      <Avatar status={avatarStatus} src={avatarSrc} />
      <Name>{name}</Name>
      <Status>{statusText}</Status>
      <Time>{time}</Time>
      <Message replied={replied}>
        {replied && (
          <Icon
            width={16}
            height={14}
            icon={Replied}
            color={active ? theme.inactiveColorDark : theme.inactiveColor}
            opacity={active ? 0.4 : 1}
            style={{
              justifyContent: 'start',
            }}
          />
        )}
        <MessageText title={message}>{message}</MessageText>
        <UnreadBadge count={unreadCount} />
      </Message>
    </StyledMessageCard>
  )
}

MessageCard.propTypes = {
  avatarSrc: PropTypes.string.isRequired,
  avatarStatus: PropTypes.any,
  statusText: PropTypes.any,
  name: PropTypes.any,
  time: PropTypes.any,
  message: PropTypes.any,
  unreadCount: PropTypes.number,
  active: PropTypes.bool,
  replied: PropTypes.bool,
  children: PropTypes.any,
}

export default MessageCard
