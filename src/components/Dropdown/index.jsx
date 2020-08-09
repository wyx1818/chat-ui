import React, { useState } from 'react'
import PropTypes from 'prop-types'

import StyledDropdown, { DropDownContainer } from './style'

function Dropdown ({ content,align= 'right',children, ...rest }) {
  const [visible, setVisible] = useState(false)

  return (
    <StyledDropdown onClick={()=> setVisible(!visible)} { ...rest }>
      {children}
      {content && <DropDownContainer align={align} visible={visible}>{content}</DropDownContainer>}
    </StyledDropdown>
  )
}

Dropdown.propTypes = {
  children: PropTypes.any,
  content: PropTypes.any,
  align: PropTypes.oneOf(['top', 'left', 'bottom', 'right'])
}

export default Dropdown
