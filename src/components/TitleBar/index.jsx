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
import Dropdown from '../Dropdown'
import { DropDownItem } from '../Dropdown/style'
import Separator from '../Separator'

function TitleBar({
  onAvatarClick,
  onVideoClicked,
  avatarSrc,
  name,
  status,
  time,
  style,
  animeProps,
  children,
  ...rest
}) {
  return (
    <StyledTitleBar style={{ ...style, ...animeProps }} {...rest}>
      <Avatar onClick={onAvatarClick} src={avatarSrc} status="online" />
      <Title>
        <Paragraph size="large">{name}</Paragraph>
        <Paragraph type="secondary">
          <Text>{status === 'online' ? '在线' : '离线'}</Text>
          <Text> 最后阅读时间: {time}</Text>
        </Paragraph>
      </Title>
      <Actions>
        <Icon icon={Call} opacity={0.3} />
        <Icon icon={Camera} opacity={0.3} onClick={onVideoClicked} />
        <Dropdown
          content={
            <>
              <DropDownItem>
                <Paragraph>个人资料</Paragraph>
              </DropDownItem>
              <DropDownItem>
                <Paragraph>关闭会话</Paragraph>
              </DropDownItem>
              <Separator />
              <DropDownItem>
                <Paragraph type="danger">屏蔽此人</Paragraph>
              </DropDownItem>
            </>
          }
        >
          <Icon icon={Options} opacity={0.3} />
        </Dropdown>
      </Actions>
    </StyledTitleBar>
  )
}

TitleBar.propTypes = {
  children: PropTypes.any,
}

export default TitleBar
