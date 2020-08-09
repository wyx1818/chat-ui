import React from 'react'
import PropTypes from 'prop-types'

import StyledContactList, { Contacts } from './style'
import FilterList from '../FilterList'
import ContactCard from '../ContactCard'

function ContactList ({ children, ...rest }) {
  return (
    <StyledContactList { ...rest }>
      <FilterList options={['新添加优先', '按姓名优先']} actionLabel="添加好友">
        <Contacts>
          {new Array(10).fill(0).map((_, index) => (
            <ContactCard key={index}/>
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
