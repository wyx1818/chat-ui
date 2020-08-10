import React from 'react'
import { animated } from 'react-spring'
import PropTypes from 'prop-types'

import StyledContactList, { Contacts } from './style'
import FilterList from '../FilterList'
import ContactCard from '../ContactCard'
import useStaggeredList from '../../hooks/useStaggeredList'

import contactData from 'data/contacts'

function ContactList({ children, ...rest }) {
  const trailAnimations = useStaggeredList(10)
  return (
    <StyledContactList {...rest}>
      <FilterList options={['新添加优先', '按姓名优先']} actionLabel="添加好友">
        <Contacts>
          {contactData.map(({ id, avatar, name, intro, status }, index) => (
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
