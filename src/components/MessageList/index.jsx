import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { animated } from 'react-spring'

import StyledMessageList, { ChartLIst } from './style'
import MessageCard from '../MessageCard'
import FilterList from '../FilterList'
import useStaggeredList from '../../hooks/useStaggeredList'

import messageData from 'data/messages'

function MessageList({ changeType, children, ...rest }) {
  // 激活的会话
  const [active, setActive] = useState(null)
  // 排序状态
  const [sortType, setSortType] = useState('lastMessageAt')
  // 动画
  const trailAnimations = useStaggeredList(6)

  // 排序列表
  const filterData = messageData.sort((m, n) => n[sortType] - m[sortType])

  return (
    <StyledMessageList {...rest}>
      <FilterList
        options={[
          { label: '最新消息', value: 'lastMessageAt' },
          { label: '最后查看', value: 'lastSeenAt' },
        ]}
        actionLabel="创建会话"
        filterValue={sortType}
        setSortType={setSortType}
      >
        <ChartLIst>
          {filterData.map((data, index) => {
            const {
              id,
              avatarSrc,
              name,
              status,
              statusText,
              message,
              unreadCount,
              replied,
            } = data
            return (
              <animated.div key={id} style={trailAnimations[index]}>
                <MessageCard
                  key={id}
                  id={id}
                  active={active === id}
                  setActive={setActive}
                  changeType={changeType}
                  replied={replied}
                  avatarSrc={avatarSrc}
                  name={name}
                  avatarStatus={status}
                  statusText={statusText}
                  time={data[sortType]}
                  message={message}
                  unreadCount={unreadCount}
                />
              </animated.div>
            )
          })}
        </ChartLIst>
      </FilterList>
    </StyledMessageList>
  )
}

MessageList.propTypes = {
  children: PropTypes.any,
}

export default MessageList
