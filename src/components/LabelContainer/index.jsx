import React from 'react'
import PropTypes from 'prop-types'

import StyledLabelContainer from './style'
import Text from '../Text'

/**
 * label布局容器
 * @param children 展示输入控件
 * @param label label标签
 * @param rest
 * @returns {JSX.Element}
 * @constructor
 */
function LabelContainer({ children, label, ...rest }) {
  return (
    <StyledLabelContainer {...rest}>
      {label && <Text style={{ marginBottom: '8px' }}>{label}: </Text>}
      {children}
    </StyledLabelContainer>
  )
}

LabelContainer.propTypes = {
  children: PropTypes.any,
}

export default LabelContainer
