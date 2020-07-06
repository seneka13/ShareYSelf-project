const initialState = {
  login: {
    username: '',
    password: '',
  },
  signup: {
    username: '',
    password: '',
    firstname: '',
    lastname: '',
  },
  event: {
    eventname: '',
    location: '',
    date: '',
    time: '',
    desc: '',
  },
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_FIELD':
      return {
        ...state,
        [action.formName]: {
          ...state[action.formName],
          [action.fieldName]: action.value,
        },
      }
    case 'CLEAR_FIELDS':
      return {
        ...state,
        login: initialState.login,
        signin: initialState.signin,
        event: initialState.event,
      }
    default:
      return state
  }
}

export default reducer
