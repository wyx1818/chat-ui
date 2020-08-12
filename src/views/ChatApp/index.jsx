import React from 'react'
import PropTypes from 'prop-types'
import 'styled-components/macro'
import { connect } from 'react-redux'

import StyledChatApp, { Drawer } from './style'
import NavBar from './NavBar'
import Profile from 'components/Profile'
import SideBar from './SideBar'
import { hideDrawer } from '../../redux/actions'
import Content from './Content'

function ChatApp({ drawerState, hideDrawer, children, ...rest }) {
  return (
    <StyledChatApp {...rest}>
      <NavBar />

      <SideBar />

      <Content />

      <Drawer show={drawerState}>
        <Profile onCloseClick={hideDrawer} />
      </Drawer>
    </StyledChatApp>
  )
}

ChatApp.propTypes = {
  children: PropTypes.any,
}

const mapStatesToProps = (state) => ({
  drawerState: state.drawer.drawerState,
})

const mapDispatchToProps = (dispatch) => ({
  hideDrawer: () => dispatch(hideDrawer()),
})

export default connect(mapStatesToProps, mapDispatchToProps)(ChatApp)
