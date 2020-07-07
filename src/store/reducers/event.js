import {
  GET_EVENT_LOADING,
  GET_EVENT_SUCCESS,
  GET_EVENT_FAILED,

  CREATE_EVENT_LOADING,
  CREATE_EVENT_SUCCESS,
  CREATE_EVENT_FAILED,

  DELETE_EVENT_LOADING,
  DELETE_EVENT_SUCCESS,
  DELETE_EVENT_FAILED,
} from '../constants'

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
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EVENT_SUCCESS:
      return {
        ...state,
        events: action.data,
        get: {
          success: true,
          loading: false,
          failed: false,
          error: '',
        },
      }
    case GET_EVENT_LOADING:
      return {
        ...state,
        get: {
          success: false,
          loading: true,
          failed: false,
          error: '',
        },
      }
    case GET_EVENT_FAILED:
      return {
        ...state,
        get: {
          success: false,
          loading: false,
          failed: true,
          error: action.error,
        },
      }
    case CREATE_EVENT_SUCCESS:
      return {
        ...state,
        create: {
          success: true,
          loading: false,
          failed: false,
          error: '',
        },
      }
    case CREATE_EVENT_LOADING:
      return {
        ...state,
        create: {
          success: false,
          loading: true,
          failed: false,
          error: '',
        },
      }
    case CREATE_EVENT_FAILED:
      return {
        ...state,
        create: {
          success: false,
          loading: false,
          failed: true,
          error: action.error,
        },
      }
    case DELETE_EVENT_SUCCESS:
      return {
        ...state,
        delete: {
          success: true,
          loading: false,
          failed: false,
          error: '',
        },
      }
    case DELETE_EVENT_LOADING:
      return {
        ...state,
        delete: {
          success: false,
          loading: true,
          failed: false,
          error: '',
        },
      }
    case DELETE_EVENT_FAILED:
      return {
        ...state,
        delete: {
          success: false,
          loading: false,
          failed: true,
          error: action.error,
        },
      }
    default:
      return state
  }
}

export default reducer
