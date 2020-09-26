import * as t from '../actions/actionTypes';


const defaultState = {
  creditApprovals: [],
  error: null,
  pending: false
}

const creditApprovalReducer = (state = defaultState, action) => {
  switch (action.type) {
    case t.GET_CREDITAPPROVALS_SUCCESS:
      return {
        ...state,
        pending: false,
        creditApprovals: action.payload
      }
    case t.GET_CREDITAPPROVALS_PENDING:
      return {
        ...state,
        pending: true
      }
    case t.GET_CREDITAPPROVALS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      }
    default:
      return state;
  }
}



// export const getProducts = state => state.products;
// const loginReducer = (state = defaultState, action) => {
//   switch (action.type) {
//     case t.SET_USER:
//       return {
//         isLoggedIn: true,
//         user: { ...action.payload }
//       }
//     case t.LOG_OUT:
//       localStorage.clear()
//       return {
//         isLoggedIn: false,
//         user: {}
//       }
//     default: return state
//   }
// }

export default creditApprovalReducer;
