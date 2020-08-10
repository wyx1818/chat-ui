import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom'
import 'styled-components/macro'

import StyledChatApp, { Content, Nav, SideBar, Drawer } from './style'
import NavBar from '../NavBar'
import MessageList from '../MessageList'
import Conversation from '../Conversation'
import Profile from '../Profile'
import ContactList from '../ContactList'
import FileList from '../FileList'
import NoteList from '../NoteList'
import EditProfile from '../EditProfile'
import Settings from '../Settings'
import BlockedLIst from '../BlockedLIst'
import VideoCall from '../VideoCall'

function ChatApp({ children, ...rest }) {
  const [showDrawer, setShowDrawer] = useState(false)
  const [videoCalling, setVideoCalling] = useState(false)

  return (
    <StyledChatApp {...rest}>
      <Nav>
        <NavBar />
      </Nav>

      <SideBar>
        <Switch>
          <Route exact path="/">
            <MessageList />
          </Route>
          <Route exact path="/contacts">
            <ContactList />
          </Route>
          <Route exact path="/files">
            <FileList />
          </Route>
          <Route exact path="/notes">
            <NoteList />
          </Route>
          <Route path="/settings">
            <EditProfile />
          </Route>
        </Switch>
      </SideBar>

      <Content>
        {videoCalling && <VideoCall onHangOffClicked={() => setVideoCalling(false)}/>}
        <Switch>
          <Route exact path="/settings">
            <Settings />
          </Route>
          <Route exact path="/settings/blocked">
            <BlockedLIst />
          </Route>
          <Route path="/">
            <Conversation
              onAvatarClick={() => setShowDrawer(true)}
              onVideoClicked={() => setVideoCalling(true)}
            />
          </Route>
        </Switch>
      </Content>

      <Drawer show={showDrawer}>
        <Profile onCloseClick={() => setShowDrawer(false)} />
      </Drawer>
    </StyledChatApp>
  )
}

ChatApp.propTypes = {
  children: PropTypes.any,
}

export default ChatApp
