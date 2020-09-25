import * as t from '../actions/actionTypes';

const defaultState = {
  user: {},
  allUsers: []
}


export function user(state = defaultState, action) {
  switch (action.type) {
    case 'GET_ALL_USERS':
      return {
        ...state,
        users: action.allUsers
      };
    default:
      return state;
  }
}