import {
  GET_EVENT_LOADING,
  GET_EVENT_SUCCESS,
  GET_EVENT_FAILED,

  CREATE_EVENT_LOADING,
  CREATE_EVENT_SUCCESS,
  CREATE_EVENT_FAILED,
  EVENT_SUCCESS_RESET,

  DELETE_EVENT_LOADING,
  DELETE_EVENT_SUCCESS,
  DELETE_EVENT_FAILED,

  EDIT_EVENT_LOADING,
  EDIT_EVENT_SUCCESS,
  EDIT_EVENT_FAILED,
} from '../constants'
import stateCreator from '../../services/stateCreator'

const initialState = {
  events: [],
  create: {
    success: false,
    loading: false,
    failed: false,
    error: '',
  },
  get: {
    success: false,
    loading: false,
    failed: false,
    error: '',
  },
  delete: {
    success: false,
    loading: false,
    failed: false,
    error: '',
  },
  edit: {
    success: false,
    loading: false,
    failed: false,
    error: '',
  },
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EVENT_SUCCESS:
      return {
        ...state,
        events: action.data,
        get: stateCreator('success'),
      }
    case GET_EVENT_LOADING:
      return {
        ...state,
        get: stateCreator('loading'),
      }
    case GET_EVENT_FAILED:
      return {
        ...state,
        get: stateCreator('failed', action.error),
      }
    case CREATE_EVENT_SUCCESS:
      return {
        ...state,
        create: stateCreator('success'),
      }
    case CREATE_EVENT_LOADING:
      return {
        ...state,
        create: stateCreator('loading'),
      }
    case CREATE_EVENT_FAILED:
      return {
        ...state,
        create: stateCreator('failed', action.error),
      }
    case EVENT_SUCCESS_RESET:
      return {
        ...state,
        create: initialState,
        edit: initialState,
        delete: initialState,
      }
    case EDIT_EVENT_SUCCESS:
      return {
        ...state,
        edit: stateCreator('success'),
      }
    case EDIT_EVENT_LOADING:
      return {
        ...state,
        edit: stateCreator('loading'),
      }
    case EDIT_EVENT_FAILED:
      return {
        ...state,
        edit: stateCreator('failed', action.error),
      }
    case DELETE_EVENT_SUCCESS:
      return {
        ...state,
        delete: stateCreator('success'),
      }
    case DELETE_EVENT_LOADING:
      return {
        ...state,
        delete: stateCreator('loading'),
      }
    case DELETE_EVENT_FAILED:
      return {
        ...state,
        delete: stateCreator('failed', action.error),
      }
    default:
      return state
  }
}

export default reducer
