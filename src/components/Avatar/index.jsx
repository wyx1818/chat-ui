import React from 'react'
import PropTypes from 'prop-types'

import { AvatarClip, AvatarImage, StatusIcon, StyleAvatar } from './style'

// 如何用组件来进行改造？？？
/**
 *
 * @param{string} src 头像地址
 * @param{string} size 头像尺寸
 * @param status 在线状态
 * @param{string} statusIconSize 在线状态图标尺寸
 * @param rest
 * @returns {JSX.Element}
 * @constructor
 */
function Avatar ({ src, size = '48px', status, statusIconSize = '8px', ...rest }) {
  return (
    <StyleAvatar { ...rest }>
      { status && <StatusIcon status={ status } size={ statusIconSize }/> }
      <AvatarClip size={ size }>
        <AvatarImage src={ src } alt=""/>
      </AvatarClip>
    </StyleAvatar>
  )
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  size: PropTypes.string,
  status: PropTypes.oneOf(['online', 'offline']),
  statusIconSize: PropTypes.string
}

export default Avatar
