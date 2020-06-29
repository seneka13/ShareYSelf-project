import { combineReducers } from 'redux'
import todo from './todo'
import auth from './auth'
import fields from './fields'

export default combineReducers({
  todo,
  auth,
  fields,
})
