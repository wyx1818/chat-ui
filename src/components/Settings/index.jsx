import React from 'react'
import PropTypes from 'prop-types'
import 'styled-components/macro'
import { Link } from 'react-router-dom'

import StyledSettings, {
  SettingsItemControl,
  StyledSettingsGroup,
  StyledSettingsItem,
} from './style'
import Paragraph from '../Paragraph'
import Switch from '../Switch'
import Icon from '../Icon'

import { ReactComponent as ArrowMenuRight } from 'assets/icons/arrowMenuRight.svg'
import Separator from '../Separator'
import { useSpring, animated } from 'react-spring'

function Settings({ children, ...rest }) {
  const animeProps = useSpring({
    transform: 'translate3d(0px, 0px, 0px)',
    opacity: 1,
    from: { transform: 'translate3d(100px, 0px, 0px)', opacity: 0 },
    config: {
      tension: 140,
    },
    delay: 300,
  })

  return (
    <StyledSettings {...rest}>
      <animated.div style={animeProps}>
        <SettingsGroup groupName="隐私设置">
          <SettingsItem label="添加好友时需要验证" />
          <SettingsItem
            label="推荐通讯录好友"
            description="上传通讯录只用来匹配好友列表，本应用不会记录和发送任何信息给其他机构"
          />
          <SettingsItem label="只能通过手机号找到我" />
        </SettingsGroup>

        <SettingsGroup groupName="通知设置">
          <SettingsItem label="新消息通知" />
          <SettingsItem label="语音和视频通话提醒" />
          <SettingsItem label="显示通知详情" />
          <SettingsItem label="声音" />
          <Link
            to={`/settings/blocked`}
            css={`
              text-decoration: none;
              color: inherit;
            `}
          >
            <SettingsItem label="已屏蔽的的好友列表" type="menu" />
          </Link>
        </SettingsGroup>
      </animated.div>
    </StyledSettings>
  )
}

function SettingsGroup({ groupName, children, ...rest }) {
  return (
    <StyledSettingsGroup>
      <Paragraph
        size="XXLarge"
        css={`
          padding-bottom: 24px;
        `}
      >
        {groupName}
      </Paragraph>
      {children}
    </StyledSettingsGroup>
  )
}

function SettingsItem({
  type = 'switch',
  label,
  description,
  children,
  ...rest
}) {
  return (
    <StyledSettingsItem>
      <SettingsItemControl>
        <Paragraph size="large">{label}</Paragraph>
        {type === 'switch' && <Switch />}
        {type === 'menu' && <Icon icon={ArrowMenuRight} />}
      </SettingsItemControl>

      {description && (
        <Paragraph type="secondary" styled={{ margin: '4px 0' }}>
          {description}
        </Paragraph>
      )}

      <Separator
        css={`
          margin-top: 8px;
          margin-bottom: 20px;
        `}
      />
    </StyledSettingsItem>
  )
}

Settings.propTypes = {
  children: PropTypes.any,
  type: PropTypes.string,
  label: PropTypes.string,
  description: PropTypes.string,
}

export default Settings

export { SettingsItem }
