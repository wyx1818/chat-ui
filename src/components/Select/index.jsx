import React from 'react'
import PropTypes from 'prop-types'

import StyledSelect from './style'

function Select({ label, type, children, ...rest }) {
  const selectWithoutLabel = (
    <StyledSelect type={type} {...rest}>
      {children}
    </StyledSelect>
  )

  return label ? (
    <StyledSelect {...rest}>{children}</StyledSelect>
  ) : (
    selectWithoutLabel
  )
}

Select.propTypes = {
  children: PropTypes.any,
  type: PropTypes.oneOf(['form']),
}

export default Select
