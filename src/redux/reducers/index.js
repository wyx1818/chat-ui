import { combineReducers } from 'redux'
import videoCalling from './videoCalling'
import drawer from './drawer'

const rootReducer = combineReducers({ videoCalling, drawer })

export default rootReducer
