import React, { useState } from 'react'
import PropTypes from 'prop-types'

import StyledPopover, { Content, Target, Triangle } from './style'

/**
 * 弹出组件
 * @param children
 * @param content 文本或组件
 * @param offset 偏移；x，正右；y，正下
 * @param [onVisible] 显示时的回调函数
 * @param [onHide] 隐藏时的回调函数
 * @param rest
 * @returns {JSX.Element}
 * @constructor
 */
function Popover({
  children,
  content,
  offset = {},
  onVisible,
  onHide,
  ...rest
}) {
  const [visible, setVisible] = useState(false)

  const handleClick = () => {
    if (visible) {
      setVisible(false)
      onHide && onHide()
    } else {
      setVisible(true)
      onVisible && onVisible()
    }
  }

  return (
    <StyledPopover onClick={handleClick} {...rest}>
      <Content offset={offset} visible={visible}>
        {content}
      </Content>
      <Triangle offset={offset} visible={visible} />
      <Target>{children}</Target>
    </StyledPopover>
  )
}

Popover.propTypes = {
  children: PropTypes.any,
  content: PropTypes.any,
  offset: PropTypes.shape({ x: PropTypes.string, y: PropTypes.string }),
  onVisible: PropTypes.func,
  onHide: PropTypes.func,
}

export default Popover
