import { SHOW_VIDEO_CALLING, HIDE_VIDEO_CALLING } from '../constants/AppStateTypes'

const initialState = { videoCallingState: false }

const videoCalling = (state = initialState, action) => {
  switch (action.type) {
    case HIDE_VIDEO_CALLING:
      return { videoCallingState: false }
    case SHOW_VIDEO_CALLING:
      return { videoCallingState: true }
    default:
      return state
  }
}

export default videoCalling
