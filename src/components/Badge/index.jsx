import React from 'react'
import PropTypes from 'prop-types'

import StyleBadge, { Count } from './style'

function Badge ({
    children,
    show = false,
    count = 0,
    showZero = false,
    ...rest
  }) {
  return (
    <StyleBadge
      variant = { children ? 'dot': 'default' }
      show={ show }
      count={ count }
      showZero={ showZero }
      { ...rest }
    >
      { children || <Count>{ count }</Count> }
    </StyleBadge>
  )
}

Badge.propTypes = {
  children: PropTypes.any,
  show: PropTypes.bool,
  shoeZero: PropTypes.bool,
  count: PropTypes.number
}

export default Badge
