import { combineReducers } from 'redux'
import videoCalling from './videoCalling'
import drawer from './drawer'
import sideBarRedux from './sideBarRedux'

const rootReducer = combineReducers({ videoCalling, drawer, sideBarRedux })

export default rootReducer
