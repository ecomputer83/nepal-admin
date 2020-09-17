import * as t from '../actions/actionTypes';

const defaultState = {
  isLoggedIn: false,
  user: {}
}

const loginReducer = (state = defaultState, action) => {
  switch (action.type) {
    case t.SET_USER:
      return {
        isLoggedIn: true,
        user: { ...action.payload }
      }
    case t.LOG_OUT:
      localStorage.clear()
      return {
        isLoggedIn: false,
        user: {}
      }
    default: return state
  }
}

export default loginReducer;
