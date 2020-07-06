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
    case 'GET_EVENT_SUCCESS':
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
    case 'GET_EVENT_LOADING':
      return {
        ...state,
        get: {
          success: false,
          loading: true,
          failed: false,
          error: '',
        },
      }
    case 'GET_EVENT_FAILED':
      return {
        ...state,
        get: {
          success: false,
          loading: false,
          failed: true,
          error: action.error,
        },
      }
    case 'CREATE_EVENT_SUCCESS':
      return {
        ...state,
        create: {
          success: true,
          loading: false,
          failed: false,
          error: '',
        },
      }
    case 'CREATE_EVENT_LOADING':
      return {
        ...state,
        create: {
          success: false,
          loading: true,
          failed: false,
          error: '',
        },
      }
    case 'CREATE_EVENT_FAILED':
      return {
        ...state,
        create: {
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
