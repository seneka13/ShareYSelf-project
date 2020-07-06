import { combineReducers } from 'redux'
import todo from './todo'
import auth from './auth'
import fields from './fields'
import event from './event'

export default combineReducers({
  todo,
  auth,
  fields,
  event,
})
