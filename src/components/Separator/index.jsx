import React from 'react'
import PropTypes from 'prop-types'

import StyledSeparator from './style'

function Separator({ children, ...rest }) {
  return <StyledSeparator {...rest}>{children}</StyledSeparator>
}

Separator.propTypes = {
  children: PropTypes.any
}

export default Separator
