import React from 'react'
import PropTypes from 'prop-types'
import { animated } from 'react-spring'

import StyledMessageList, { ChartLIst } from './style'
import MessageCard from '../MessageCard'
import face1 from 'assets/images/face-female-2.jpg'
import FilterList from '../FilterList'
import useStaggeredList from '../../hooks/useStaggeredList'

function MessageList({ children, ...rest }) {
  const trailAnimations = useStaggeredList(6)

  return (
    <StyledMessageList {...rest}>
      <FilterList
        options={['最新消息优先', '在线好友优先']}
        actionLabel="创建会话"
      >
        <ChartLIst>
          {[1, 2, 3, 4, 5, 6].map((_, index) => (
            <animated.div key={index} style={trailAnimations[index]}>
              <MessageCard
                key={index}
                active={index === 3}
                replied={index % 3 === 0}
                avatarSrc={face1}
                name="李荣浩"
                avatarStatus="online"
                statusText="在线"
                time="3 小时之前"
                message="芜湖啦，没有关系"
                unreadCount={2}
              />
            </animated.div>
          ))}
        </ChartLIst>
      </FilterList>
    </StyledMessageList>
  )
}

MessageList.propTypes = {
  children: PropTypes.any,
}

export default MessageList
