import {
  SHOW_MENU,
} from '../constants'

const initialState = {
  show: false,
}

const reducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case SHOW_MENU:
      return {
        ...state,
        show: action.show,
      }
    default:
      return state
  }
}

export default reducer
