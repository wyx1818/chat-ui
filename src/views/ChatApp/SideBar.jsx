import React from 'react'
import { animated, useTransition } from 'react-spring'
import { Route, Switch, useLocation, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import MessageList from 'components/MessageList'
import ContactList from 'components/ContactList'
import FileList from 'components/FileList'
import NoteList from 'components/NoteList'
import EditProfile from 'components/EditProfile'
import { StyledSideBar } from './style'
import { setContactType, setConversationType } from '../../redux/actions'

function SideBar(props) {
  const { setContactType, setConversationType } = props

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
            <Route path="/chat">
              <MessageList changeType={setConversationType} />
            </Route>
            <Route exact path="/contacts">
              <ContactList changeType={setContactType} />
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
            <Redirect to="/chat" from="/" exact />
          </Switch>
        </animated.div>
      ))}
    </StyledSideBar>
  )
}

const mapDispatchToProps = (dispatch) => ({
  setContactType: (contactType) => dispatch(setContactType(contactType)),
  setConversationType: (conversationType) =>
    dispatch(setConversationType(conversationType)),
})

export default connect(null, mapDispatchToProps)(SideBar)
