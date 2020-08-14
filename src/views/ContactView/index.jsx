import React from 'react'
import { StyledEmptyContactView } from './styled'
import Empty from '../../components/Empty'

import emptyIcon from 'assets/icons/undraw_contact_us_15o2.svg'

ContactView.propTypes = {}
ContactView.defaultProps = {
  type: 'empty',
}

function ContactView(props) {
  const { type } = props
  if (type === 'empty') {
    return (
      <StyledEmptyContactView>
        <Empty icon={emptyIcon} />
      </StyledEmptyContactView>
    )
  }

  return <div></div>
}

export default ContactView
