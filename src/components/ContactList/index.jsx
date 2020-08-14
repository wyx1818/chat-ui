import React, { useState } from 'react'
import { animated } from 'react-spring'
import PropTypes from 'prop-types'
import pinyin from 'pinyin'

import StyledContactList, { Contacts } from './style'
import FilterList from '../FilterList'
import ContactCard from '../ContactCard'
import useStaggeredList from '../../hooks/useStaggeredList'

import contactData from 'data/contacts'

// 将汉字转为拼音，方便后续排序
const dealData = contactData.map((data) => ({
  ...data,
  pinyin: pinyin(data.name).join(''),
}))

function ContactList({ children, ...rest }) {
  const [sortType, setSortType] = useState('pinyin')

  const trailAnimations = useStaggeredList(10)

  const filterData =
    sortType === 'pinyin'
      ? dealData.sort((m, n) => m[sortType].localeCompare(n[sortType]))
      : dealData.sort((m, n) => n[sortType] - m[sortType])

  return (
    <StyledContactList {...rest}>
      <FilterList
        options={[
          { label: '添加时间', value: 'addTime' },
          { label: '姓名', value: 'pinyin' },
        ]}
        actionLabel="添加好友"
        filterValue={sortType}
        setSortType={setSortType}
      >
        <Contacts>
          {filterData.map(({ id, avatar, name, intro, status }, index) => (
            <animated.div key={id} style={trailAnimations[index]}>
              <ContactCard
                key={id}
                avatarSrc={avatar}
                name={name}
                intro={intro}
                status={status}
              />
            </animated.div>
          ))}
        </Contacts>
      </FilterList>
    </StyledContactList>
  )
}

ContactList.propTypes = {
  children: PropTypes.any,
}

export default ContactList
