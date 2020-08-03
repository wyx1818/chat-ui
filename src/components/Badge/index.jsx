import React from 'react'
import PropTypes from 'prop-types'

import StyledBadge, { Count } from './style'

/**
 * UI 组件/徽章
 * @param children
 * @param show 是否显示
 * @param count 显示数字
 * @param showZero 是否显示0
 * @param rest
 * @returns {JSX.Element}
 * @constructor
 */
function Badge({
  children,
  show = false,
  count = 0,
  showZero = false,
  ...rest
}) {
  return (
    <StyledBadge
      variant={children ? 'dot' : 'default'}
      show={show}
      count={count}
      showZero={showZero}
      {...rest}
    >
      {children || <Count>{count}</Count>}
    </StyledBadge>
  )
}

Badge.propTypes = {
  children: PropTypes.any,
  show: PropTypes.bool,
  shoeZero: PropTypes.bool,
  count: PropTypes.number
}

export default Badge
