import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import Settings from '../../components/Settings'
import BlockedLIst from '../../components/BlockedLIst'
import Conversation from '../Conversation'
import VideoCallContainer from 'containers/VideoCallContainer'
import { StyledContent } from './style'
import RichEditor from '../RichEditor'
import FileView from '../FileView'
import ContactView from '../ContactView'

import notesDetail from '../../data/notesDetail'

function Content(props) {
  const {
    videoCallingState,
    conversationType,
    contactType,
    fileType,
    noteType,
  } = props

  console.log('侧边栏状态', conversationType, contactType, fileType, noteType)

  const { title, detail: noteValue, updatedAt } = notesDetail[0]

  return (
    <StyledContent>
      {videoCallingState && <VideoCallContainer />}
      <Switch>
        <Route exact path="/settings">
          <Settings />
        </Route>
        <Route exact path="/settings/blocked">
          <BlockedLIst />
        </Route>
        <Route exact path="/notes">
          <RichEditor title={title} type={noteType} noteValue={noteValue} time={updatedAt}/>
        </Route>
        <Route exact path="/files">
          <FileView type={fileType} />
        </Route>
        <Route exact path="/contacts">
          <ContactView type={contactType} />
        </Route>
        <Route exact path="/chat">
          <Conversation type={conversationType} />
        </Route>
      </Switch>
    </StyledContent>
  )
}

const mapStateToProps = (state) => {
  return {
    videoCallingState: state.videoCalling.videoCallingState,
    conversationType: state.sideBarRedux.conversationState,
    contactType: state.sideBarRedux.contactState,
    fileType: state.sideBarRedux.fileState,
    noteType: state.sideBarRedux.noteState,
  }
}

export default connect(mapStateToProps)(Content)
