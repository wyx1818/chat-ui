import React from 'react'
import PropTypes from 'prop-types'

import StyledEmpty, { EmptyImg } from './style'

function Empty({ icon, children, ...rest }) {
  return (
    <StyledEmpty {...rest}>
      <EmptyImg src={icon} />
    </StyledEmpty>
  )
}

Empty.propTypes = {
  children: PropTypes.any,
}

export default Empty
