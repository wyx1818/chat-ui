import React from 'react'
import PropTypes from 'prop-types'

import StyledAvatar, { AvatarClip, AvatarImage, StatusIcon } from './style'

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
function Avatar({
  src,
  size = '48px',
  status,
  statusIconSize = '8px',
  ...rest
}) {
  return (
    <StyledAvatar {...rest}>
      {status && <StatusIcon status={status} size={statusIconSize} />}
      <AvatarClip size={size}>
        <AvatarImage src={src} alt="" />
      </AvatarClip>
    </StyledAvatar>
  )
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  size: PropTypes.string,
  status: PropTypes.oneOf(['online', 'offline']),
  statusIconSize: PropTypes.string
}

export default Avatar
