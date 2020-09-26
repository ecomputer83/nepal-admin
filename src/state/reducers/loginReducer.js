import * as t from '../actions/actionTypes';

const defaultState = {
  user: {},
  isLoggedIn: false
}

const loginReducer = (state = defaultState, action) => {
  switch (action.type) {
    case t.SET_USER:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload
      }
    case t.LOG_OUT:
      localStorage.clear()
      return {
        ...state,
        isLoggedIn: false,
        user: {}
      }
    default: return state
  }
}

export default loginReducer;
