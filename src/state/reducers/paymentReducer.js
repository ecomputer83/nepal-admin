import * as t from '../actions/actionTypes';


const defaultState = {
  paymentOrders: [],
  error: null,
  pending: false
}

const paymentReducer = (state = defaultState, action) => {
  switch (action.type) {
    case t.GET_PAYMENTS_SUCCESS:
      return {
        ...state,
        pending: false,
        paymentOrders: action.payload
      }
    case t.GET_PAYMENTS_PENDING:
      return {
        ...state,
        pending: true
      }
    case t.GET_PAYMENTS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      }
    default:
      return state;
  }
}


export default paymentReducer;
