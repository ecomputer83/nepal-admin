import * as t from '../actions/actionTypes';

const defaultState = {
  users: [],
  error: null,
  pending: false

}

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case t.GET_ALL_USERS:
      return {
        ...state,
        pending: false,
        users: action.payload
      }
    case t.ADD_CREDIT_LIMIT:
      return {
        ...state,
        pending: false,
      }
    case t.GET_USERS_PENDING:
      return {
        ...state,
        pending: true,
      }
    case t.GET_USERS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      }
    case t.DELETE_USER_SUCCESS:
      return {
        ...state,
        pending: false
      }
    case t.DELETE_USER_ERROR:
      return {
        ...state,
        error: action.error
      }
    default:
      return state;
  }
}


export default userReducer