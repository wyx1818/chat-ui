import React from 'react'
import PropTypes from 'prop-types'
import { animated } from 'react-spring'

import StyledMessageList, { ChartLIst } from './style'
import MessageCard from '../MessageCard'
import FilterList from '../FilterList'
import useStaggeredList from '../../hooks/useStaggeredList'

import messageData from 'data/messages'

function MessageList({ children, ...rest }) {
  const trailAnimations = useStaggeredList(6)

  return (
    <StyledMessageList {...rest}>
      <FilterList
        options={['最新消息优先', '在线好友优先']}
        actionLabel="创建会话"
      >
        <ChartLIst>
          {messageData.map(
            (
              {
                id,
                avatarSrc,
                name,
                status,
                statusText,
                time,
                message,
                unreadCount,
                replied,
              },
              index
            ) => (
              <animated.div key={id} style={trailAnimations[index]}>
                <MessageCard
                  key={id}
                  active={index === 2}
                  replied={replied}
                  avatarSrc={avatarSrc}
                  name={name}
                  avatarStatus={status}
                  statusText={statusText}
                  time={time}
                  message={message}
                  unreadCount={unreadCount}
                />
              </animated.div>
            )
          )}
        </ChartLIst>
      </FilterList>
    </StyledMessageList>
  )
}

MessageList.propTypes = {
  children: PropTypes.any,
}

export default MessageList
