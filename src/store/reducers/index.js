import { combineReducers } from 'redux'
import auth from './auth'
import fields from './fields'
import event from './event'

export default combineReducers({
  auth,
  fields,
  event,
})
