import { combineReducers } from 'redux'
import todo from './todo'
import auth from './auth'

export default combineReducers({
  todo,
  auth
})
