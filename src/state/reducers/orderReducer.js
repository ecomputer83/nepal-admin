import * as t from '../actions/actionTypes';


const defaultState = {
  orders: [],
  error: null,
  pending: false
}

const orderReducer = (state = defaultState, action) => {
  switch (action.type) {
    case t.GET_ORDERS_SUCCESS:
      return {
        ...state,
        pending: false,
        orders: action.payload
      }
    case t.GET_ORDERS_PENDING:
      return {
        ...state,
        pending: true
      }
    case t.GET_ORDERS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      }
    case t.GET_ORDERS_PENDING_SUCCESS:
      return {
        ...state,
        pending: false
      }
    default:
      return state;
  }
}


export default orderReducer;
