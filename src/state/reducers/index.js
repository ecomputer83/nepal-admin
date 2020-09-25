import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import creditApprovalReducer from "./creditApprovalReducer";

const rootReducer = combineReducers({
  loginReducer,
  creditApprovalReducer
})

export default rootReducer;

// export default combineReducers({
//   user: userReducer
// });
