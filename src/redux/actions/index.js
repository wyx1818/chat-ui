import * as types from '../constants/AppStateTypes'

export const showVideoCalling = () => ({ type: types.SHOW_VIDEO_CALLING })
export const hideVideoCalling = () => ({ type: types.HIDE_VIDEO_CALLING })
export const showDrawer = () => ({ type: types.SHOW_DRAWER })
export const hideDrawer = () => ({ type: types.HIDE_DRAWER })
export const setConversationType = (conversationType) => ({
  type: types.SET_CONVERSATION_TYPE,
  conversationType,
})
export const setContactType = (contactType) => ({
  type: types.SET_CONVERSATION_TYPE,
  contactType,
})
export const setFileType = (fileType) => ({
  type: types.SET_CONVERSATION_TYPE,
  fileType,
})
export const setNoteType = (noteType) => ({
  type: types.SET_CONVERSATION_TYPE,
  noteType,
})
