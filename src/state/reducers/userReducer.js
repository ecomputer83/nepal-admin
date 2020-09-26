import * as t from '../actions/actionTypes';

const defaultState = {
  users: [],
  error: null,
}

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case t.GET_ALL_USERS:
      return {
        ...state,
        users: action.payload
      }
    case t.ADD_CREDIT_LIMIT:
      return {
        ...state
      }
    default:
      return state;
  }
}


export default userReducer