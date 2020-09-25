import * as t from '../actions/actionTypes';


const defaultState = {
  creditApprovals: [],
  error: null
}

const creditApprovalReducer = (state = defaultState, action) => {
  switch (action.type) {
    case t.GET_CREDITAPPROVALS:
      return {
        ...state,
        creditApprovals: action.payload
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
