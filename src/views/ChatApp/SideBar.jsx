import React from 'react'
import { animated, useTransition } from 'react-spring'
import { Route, Switch, useLocation } from 'react-router-dom'
import MessageList from 'components/MessageList'
import ContactList from 'components/ContactList'
import FileList from 'components/FileList'
import NoteList from 'components/NoteList'
import EditProfile from 'components/EditProfile'

import { StyledSideBar } from './style'

function SideBar() {
  const location = useLocation()
  const getFirstMatchPath = (location) => location.pathname.split('/')[1]
  const transitions = useTransition(location, getFirstMatchPath, {
    from: { opacity: 0, transform: 'translate3d(-100px, 0, 0)' },
    enter: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    leave: { opacity: 0, transform: 'translate3d(-100px, 0, 1)' },
  })

  return (
    <StyledSideBar>
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
    </StyledSideBar>
  )
}

export default SideBar
