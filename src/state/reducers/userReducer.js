import * as t from '../actions/actionTypes';

const defaultState = {
  user: {},
  allUsers: []
}

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case t.ADD_USER:
      return {
        user: { ...action.payload }
      };
    case t.GET_USERS:
      return {
        ...state,
        allUsers: []
      };
    default: return state
  }
}

export default userReducer;