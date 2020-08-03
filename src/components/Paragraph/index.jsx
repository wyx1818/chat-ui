import React from 'react'
import PropTypes from 'prop-types'

import StyledParagraph from './style'

/**
 * 段落文本组件
 * @param children
 * @param ellipsis 超长文本是否显示省略号
 * @param rest
 * @returns {JSX.Element}
 * @constructor
 */
function Paragraph({ children, ellipsis, ...rest }) {
  return (
    <StyledParagraph as="p" ellipsis={ellipsis} {...rest}>
      {children}
    </StyledParagraph>
  )
}

Paragraph.propTypes = {
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
    'XXLarge'
  ]),
  bold: PropTypes.bool,
  ellipse: PropTypes.bool
}

export default Paragraph
