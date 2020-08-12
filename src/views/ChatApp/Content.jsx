import React from 'react'
import { Route, Switch } from 'react-router-dom'
import {connect} from 'react-redux'

import Settings from '../../components/Settings'
import BlockedLIst from '../../components/BlockedLIst'
import Conversation from '../../components/Conversation'
import VideoCall from '../../components/VideoCall'
import { StyledContent } from './style'

function Content(props) {
  const { videoCallingState } = props

  return (
    <StyledContent>
      {videoCallingState && <VideoCall />}
      <Switch>
        <Route exact path="/settings">
          <Settings />
        </Route>
        <Route exact path="/settings/blocked">
          <BlockedLIst />
        </Route>
        <Route path="/">
          <Conversation />
        </Route>
      </Switch>
    </StyledContent>
  )
}

const mapStateToProps = state => ({
  videoCallingState: state.videoCalling.videoCallingState
})

export default connect(mapStateToProps)(Content)
