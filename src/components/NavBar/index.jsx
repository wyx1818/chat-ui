import React from 'react'
import PropTypes from 'prop-types'
import "styled-components/macro"

import StyledNavBar, { StyledMenuItem, MenuIcon, MenuItems } from './style'
import Badge from '../Badge'
import Avatar from '../Avatar'

import profileImage from 'assets/images/face-male-1.jpg'
import { faCog, faCommentDots, faEllipsisH, faFolder, faStickyNote, faUsers } from '@fortawesome/free-solid-svg-icons'

function NavBar ({ ...rest }) {
  return (
    <StyledNavBar { ...rest }>
      <Avatar src={profileImage} status="online"/>
      <MenuItems>
        <MenuItem icon={faCommentDots} showBadge active/>
        <MenuItem icon={faUsers}/>
        <MenuItem icon={faFolder}/>
        <MenuItem icon={faStickyNote}/>
        <MenuItem icon={faEllipsisH}/>
        <MenuItem icon={faCog} css={`align-self: end`}/>
      </MenuItems>
    </StyledNavBar>
  )
}

function MenuItem ({ icon, active, showBadge, ...rest }) {
  return (
    <StyledMenuItem active={ active } { ...rest }>
      <a href="#">
        <Badge show={ showBadge }>
          <MenuIcon icon={ icon } active={ active ? 1 : 0 }/>
        </Badge>
      </a>
    </StyledMenuItem>
  )
}

NavBar.propTypes = {
}

// MenuItem.prototype = {
//   active: PropTypes.bool,
//   showBadge: PropTypes.bool
// }

export default NavBar

export { MenuItem }
