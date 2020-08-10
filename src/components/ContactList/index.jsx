import React from 'react'
import {animated} from 'react-spring'
import PropTypes from 'prop-types'

import StyledContactList, { Contacts } from './style'
import FilterList from '../FilterList'
import ContactCard from '../ContactCard'
import useStaggeredList from '../../hooks/useStaggeredList'

function ContactList ({ children, ...rest }) {
  const trailAnimations = useStaggeredList(10)
  return (
    <StyledContactList { ...rest }>
      <FilterList options={['新添加优先', '按姓名优先']} actionLabel="添加好友">
        <Contacts>
          {new Array(10).fill(0).map((_, index) => (
            <animated.div key={index} style={trailAnimations[index]}>
            <ContactCard key={index}/>
            </animated.div>
          ))}
        </Contacts>
      </FilterList>
    </StyledContactList>
  )
}

ContactList.propTypes = {
  children: PropTypes.any
}

export default ContactList
