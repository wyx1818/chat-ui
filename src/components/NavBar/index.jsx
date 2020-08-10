import React from 'react'
import PropTypes from 'prop-types'
import 'styled-components/macro'
import {Link, useLocation, matchPath} from 'react-router-dom'

import StyledNavBar, { StyledMenuItem, MenuIcon, MenuItems } from './style'
import Badge from '../Badge'
import Avatar from '../Avatar'

import profileImage from 'assets/images/face-male-1.jpg'
import {
  faCog,
  faCommentDots,
  faEllipsisH,
  faFolder,
  faStickyNote,
  faUsers,
} from '@fortawesome/free-solid-svg-icons'

/**
 * 页面组件/侧导航组件
 * @param rest
 * @returns {JSX.Element}
 * @constructor
 */
function NavBar({ ...rest }) {
  return (
    <StyledNavBar {...rest}>
      <Avatar src={profileImage} status="online" />
      <MenuItems>
        <MenuItem toPath='/' icon={faCommentDots} showBadge />
        <MenuItem toPath='/contacts' icon={faUsers} />
        <MenuItem toPath='/files' icon={faFolder} />
        <MenuItem toPath='/notes' icon={faStickyNote} />
        <MenuItem toPath='#' icon={faEllipsisH} />
        <MenuItem
          toPath='/settings'
          icon={faCog}
          css={`
            align-self: end;
          `}
        />
      </MenuItems>
    </StyledNavBar>
  )
}

/**
 * 页面组件/菜单子项
 * @param toPath
 * @param icon 菜单图标
 * @param active 激活状态
 * @param showBadge 显示徽章
 * @param rest
 * @returns {JSX.Element}
 * @constructor
 */
function MenuItem({ toPath, icon, showBadge, ...rest }) {
  const loc = useLocation()
  const active = !!matchPath(loc.pathname, {
    path: toPath,
    exact: toPath === '/'
  })
  return (
    <StyledMenuItem active={active} {...rest}>
      <Link to={toPath}>
        <Badge show={showBadge}>
          <MenuIcon icon={icon} active={active ? 1 : 0} />
        </Badge>
      </Link>
    </StyledMenuItem>
  )
}

NavBar.propTypes = {}

MenuItem.prototype = {
  icon: PropTypes.elementType,
  active: PropTypes.bool,
  showBadge: PropTypes.bool,
}

export default NavBar

export { MenuItem }
