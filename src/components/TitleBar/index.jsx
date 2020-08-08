import React from 'react'
import PropTypes from 'prop-types'

import StyledTitleBar, { Actions, Title } from './style'
import Avatar from '../Avatar'
import Paragraph from '../Paragraph'
import Text from '../Text'
import Icon from '../Icon'

import { ReactComponent as Call } from 'assets/icons/call.svg'
import { ReactComponent as Camera } from 'assets/icons/camera.svg'
import { ReactComponent as Options } from 'assets/icons/options.svg'

function TitleBar({ avatarSrc, name, status, time, children, ...rest }) {
  return (
    <StyledTitleBar {...rest}>
      <Avatar src={avatarSrc} status="online" />
      <Title>
        <Paragraph size="large">{name}</Paragraph>
        <Paragraph type="secondary">
          <Text>{status === 'online' ? '在线' : '离线'}</Text>
          <Text> 最后阅读时间: {time}</Text>
        </Paragraph>
      </Title>
      <Actions>
        <Icon icon={Call} opacity={0.3} />
        <Icon icon={Camera} opacity={0.3} />
        <Icon icon={Options} opacity={0.3} />
      </Actions>
    </StyledTitleBar>
  )
}

TitleBar.propTypes = {
  children: PropTypes.any,
}

export default TitleBar
