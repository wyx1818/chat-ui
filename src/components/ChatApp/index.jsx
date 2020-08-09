import React from 'react'
import PropTypes from 'prop-types'

import StyledChatApp, { Content, Nav, SideBar, Drawer } from './style'
import NavBar from '../NavBar'
import MessageList from '../MessageList'
import Conversation from '../Conversation'
import Profile from '../Profile'

function ChatApp ({ children, ...rest }) {
  return (
    <StyledChatApp { ...rest }>
      <Nav>
        <NavBar/>
      </Nav>

      <SideBar>
        <MessageList/>
      </SideBar>

      <Content>
        <Conversation/>
      </Content>

      <Drawer>
        <Profile/>
      </Drawer>
    </StyledChatApp>
  )
}

ChatApp.propTypes = {
  children: PropTypes.any
}

export default ChatApp
