import {
  USER_DATA_LOADING,
  USER_DATA_SUCCESS,
  USER_DATA_FAILED,

  USER_DATA_CHANGE_LOADING,
  USER_DATA_CHANGE_SUCCESS,
  USER_DATA_CHANGE_FAILED,

  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAILED,

  SIGNUP_LOADING,
  SIGNUP_SUCCESS,
  SIGNUP_FAILED,

  USER_LOGOUT } from '../constants'
import stateCreator from '../../services/stateCreator'

const initialState = {
  user: null,
  data: {
    success: false,
    loading: false,
    failed: false,
    error: '',
  },
  login: {
    success: false,
    loading: false,
    failed: false,
    error: '',
  },
  signup: {
    success: false,
    loading: false,
    failed: false,
    error: '',
  },
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_DATA_SUCCESS:
      return {
        ...state,
        user: action.user,
        data: stateCreator('success'),
      }
    case USER_DATA_LOADING:
      return {
        ...state,
        data: stateCreator('loading'),
      }
    case USER_DATA_FAILED:
      return {
        ...state,
        data: stateCreator('failed', action.error),
      }
    case USER_DATA_CHANGE_LOADING:
      return {
        ...state,
        user: action.user,
        data: stateCreator('success'),
      }
    case USER_DATA_CHANGE_SUCCESS:
      return {
        ...state,
        data: stateCreator('loading'),
      }
    case USER_DATA_CHANGE_FAILED:
      return {
        ...state,
        data: stateCreator('failed', action.error),
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.user,
        login: stateCreator('success'),
      }
    case LOGIN_LOADING:
      return {
        ...state,
        login: stateCreator('loading'),
      }
    case LOGIN_FAILED:
      return {
        ...state,
        login: stateCreator('failed', action.error),
      }
    case SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.user,
        signup: stateCreator('success'),
      }
    case SIGNUP_LOADING:
      return {
        ...state,
        signup: stateCreator('loading'),
      }
    case SIGNUP_FAILED:
      return {
        ...state,
        signup: stateCreator('failed', action.error),
      }
    case USER_LOGOUT:
      return {
        ...state,
        user: null,
      }
    default:
      return state
  }
}

export default reducer
