import React from 'react'
import PropTypes from 'prop-types'

import StyledButton from './style'

/**
 * 按钮组件
 * @param children
 * @param type 类型
 * @param shape 形状
 * @param diameter 圆形直径
 * @param bgColor 背景颜色
 * @param rest
 * @returns {JSX.Element}
 * @constructor
 */
function Button({
  children,
  type = 'primary',
  shape = 'circle',
  diameter = '30px',
  bgColor,
  ...rest
}) {
  return (
    <StyledButton
      type={type}
      shape={shape}
      diameter={diameter}
      bgColor={bgColor}
      {...rest}
    >
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  children: PropTypes.any,
  type: PropTypes.oneOf(['primary','hangOff']),
  shape: PropTypes.oneOf(['circle', 'rect']),
  diameter: PropTypes.string,
}

export default Button
