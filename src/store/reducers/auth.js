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
    case 'DATA_SUCCESS':
      return {
        ...state,
        user: action.data,
        data: {
          success: true,
          loading: false,
          failed: false,
          error: '',
        },
      }
    case 'DATA_LOADING':
      return {
        ...state,
        data: {
          success: false,
          loading: true,
          failed: false,
          error: '',
        },
      }
    case 'DATA_FAILED':
      return {
        ...state,
        data: {
          success: false,
          loading: false,
          failed: true,
          error: action.error,
        },
      }
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: action.user,
        login: {
          success: true,
          loading: false,
          failed: false,
          error: '',
        },
      }
    case 'LOGIN_LOADING':
      return {
        ...state,
        login: {
          success: false,
          loading: true,
          failed: false,
          error: '',
        },
      }
    case 'LOGIN_FAILED':
      return {
        ...state,
        login: {
          success: false,
          loading: false,
          failed: true,
          error: action.error,
        },
      }
    case 'SIGNUP_SUCCESS':
      return {
        ...state,
        user: action.user,
        signup: {
          success: true,
          loading: false,
          failed: false,
          error: '',
        },
      }
    case 'SIGNUP_LOADING':
      return {
        ...state,
        signup: {
          success: false,
          loading: true,
          failed: false,
          error: '',
        },
      }
    case 'SIGNUP_FAILED':
      return {
        ...state,
        signup: {
          success: false,
          loading: false,
          failed: true,
          error: action.error,
        },
      }
    case 'USER_LOGOUT':
      return {
        ...state,
        user: null,
      }
    default:
      return state
  }
}

export default reducer
