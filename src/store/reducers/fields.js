import {
  CHANGE_FIELDS,
  CLEAR_FIELDS,
} from '../constants'

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
  editpassword: {
    password: '',
  },
  event: {
    eventname: '',
    place: '',
    date: '',
    time: '',
    desc: '',
  },
  editevent: {
    eventname: '',
    place: '',
    date: '',
    time: '',
    desc: '',
  },
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FIELDS:
      return {
        ...state,
        [action.formName]: {
          ...state[action.formName],
          [action.fieldName]: action.value,
        },
      }
    case CLEAR_FIELDS:
      return {
        ...state,
        login: initialState.login,
        signup: initialState.signup,
        event: initialState.event,
        editevent: initialState.editevent,
        editpassword: initialState.editpassword,
      }
    default:
      return state
  }
}

export default reducer
