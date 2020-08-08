import React from 'react'
import PropTypes from 'prop-types'

import StyledText from './style'

/**
 * 文本组件
 * @param children
 * @param type 文本类型 primary || danger || secondary
 * @param size 尺寸
 * @param bold 加粗
 * @param rest
 * @returns {JSX.Element}
 * @constructor
 */
function Text({ children, type = 'primary', size = 'normal', bold, ...rest }) {
  return (
    <StyledText type={type} size={size} bold={bold} {...rest}>
      {children}
    </StyledText>
  )
}

Text.propTypes = {
  children: PropTypes.any,
  type: PropTypes.oneOf(['primary', 'secondary', 'danger']),
  size: PropTypes.oneOf([
    'XXSmall',
    'XSmall',
    'small',
    'normal',
    'medium',
    'large',
    'XLarge',
    'XXLarge',
  ]),
  bold: PropTypes.bool,
}

export default Text
