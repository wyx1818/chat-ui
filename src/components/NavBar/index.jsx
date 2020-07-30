import React from 'react'
import PropTypes from 'prop-types'

import StyledNavBar, { StyledMenuItem, MenuIcon } from './style'
import Badge from '../Badge'

function NavBar ({ children, ...rest }) {
  return (
    <StyledNavBar { ...rest }>
      { children }
    </StyledNavBar>
  )
}

function MenuItem ({ icon, active, showBadge, ...rest }) {
  return (
    <StyledMenuItem active={ active } { ...rest }>
      <a href="#">
        <Badge show={ showBadge }>
          <MenuIcon icon={ icon } active={ active }/>
        </Badge>
      </a>
    </StyledMenuItem>
  )
}

NavBar.propTypes = {
  children: PropTypes.any
}

// MenuItem.prototype = {
//   active: PropTypes.bool,
//   showBadge: PropTypes.bool
// }

export default NavBar

export { MenuItem }
