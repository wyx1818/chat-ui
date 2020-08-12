import { SHOW_DRAWER, HIDE_DRAWER } from '../constants/AppStateTypes'

const initialState = { drawerState: false }

const drawer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_DRAWER:
      return { drawerState: true }
    case HIDE_DRAWER:
      return { drawerState: false }
    default:
      return state
  }
}

export default drawer
