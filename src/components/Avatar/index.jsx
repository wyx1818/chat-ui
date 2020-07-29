import React, { Component } from 'react'
import PropTypes from 'prop-types'
import face1 from '../../assets/images/face-male-1.jpg'
import { AvatarClip, AvatarImage, StatusIcon, StyleAvatar } from './style'

class Avatar extends Component {
  render () {
    return (
      <StyleAvatar>
        <StatusIcon></StatusIcon>
        <AvatarClip>
          <AvatarImage src={face1} alt=""/>
        </AvatarClip>
      </StyleAvatar>
    )
  }
}

Avatar.propTypes = {}

export default Avatar
