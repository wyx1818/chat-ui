import {
  SET_CONVERSATION_TYPE,
  SET_CONTACT_TYPE,
  SET_FILE_TYPE,
  SET_NOTE_TYPE,
} from '../constants/AppStateTypes'

const initialState = {
  conversationState: 'empty',
  contactState: 'empty',
  fileState: 'empty',
  noteState: 'edit',
}

const sideBarRedux = (state = initialState, action) => {
  switch (action.type) {
    case SET_CONTACT_TYPE:
      return { ...state, contactState: action.contactType }
    case SET_CONVERSATION_TYPE:
      return { ...state, conversationState: action.conversationType }
    case SET_FILE_TYPE:
      return { ...state, fileState: action.fileType }
    case SET_NOTE_TYPE:
      return { ...state, noteState: action.noteType }
    default:
      return state
  }
}

export default sideBarRedux
