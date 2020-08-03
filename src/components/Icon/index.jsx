import React from 'react'
import PropTypes from 'prop-types'

import StyledIcon from './style'
import SocialIcon from './SocialIcon'

/**
 * UI 组件/图标
 * @param IconComponent
 * @param width 图标宽度
 * @param height 图标高度
 * @param color 图标颜色
 * @param opacity 图标透明的
 * @param rest
 * @returns {JSX.Element}
 * @constructor
 */
function Icon ({
    icon: IconComponent,
    width = 24,
    height = 24,
    color,
    opacity,
    ...rest
  }) {
  return (
    <StyledIcon color={ color } opacity={ opacity } { ...rest }>
      { IconComponent && <IconComponent width={ width } height={ height }/> }
    </StyledIcon>
  )
}

Icon.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.elementType]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  color: PropTypes.string,
  opacity: PropTypes.number
}

Icon.Social = SocialIcon

export default Icon
