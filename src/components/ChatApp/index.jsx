import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, useLocation } from 'react-router-dom'
import 'styled-components/macro'
import { animated } from 'react-spring'

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
import { useTransition } from 'react-spring/web'

function ChatApp({ children, ...rest }) {
  const [showDrawer, setShowDrawer] = useState(false)
  const [videoCalling, setVideoCalling] = useState(false)

  const location = useLocation()
  const getFirstMatchPath = (location) => location.pathname.split('/')[1]
  const transitions = useTransition(location, getFirstMatchPath, {
    from: { opacity: 0, transform: 'translate3d(-100px, 0, 0)' },
    enter: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    leave: { opacity: 0, transform: 'translate3d(-100px, 0, 1)' },
  })
  return (
    <StyledChatApp {...rest}>
      <Nav>
        <NavBar />
      </Nav>

      <SideBar>
        {transitions.map(({ item: location, props, key }) => (
          <animated.div key={key} style={props}>
            <Switch location={location}>
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
          </animated.div>
        ))}
      </SideBar>

      <Content>
        {videoCalling && (
          <VideoCall onHangOffClicked={() => setVideoCalling(false)} />
        )}
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
