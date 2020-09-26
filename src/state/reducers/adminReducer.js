import * as t from '../actions/actionTypes';

const defaultState = {
  allAdmin: [],
  error: null,
  pending: false,
  role: []
}

const adminReducer = (state = defaultState, action) => {
  switch (action.type) {
    case t.GET_ALLADMIN_SUCCESS:
      return {
        ...state,
        pending: false,
        allAdmin: action.payload
      }
    case t.GET_ALLADMIN_PENDING:
      return {
        ...state,
        pending: true
      }
    case t.GET_ALLADMIN_ERROR:
      return {
        ...state,
        error: action.error
      }
    case t.ADD_ADMIN_SUCCESS:
      return {
        ...state,
        pending: false
      }
    case t.ADD_ADMIN_PENDING:
      return {
        ...state,
        pending: true
      }
    case t.ADD_ADMIN_ERROR:
      return {
        ...state,
        error: action.error
      }
    case t.GET_ADMIN_ROLE:
      return {
        ...state,
        role: action.payload
      }
    case t.ADD_ADMIN_ROLE:
      return {
        ...state,
        pending: false
      }
    default:
      return state;
  }
}

export default adminReducer