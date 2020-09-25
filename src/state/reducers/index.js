import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import creditApprovalReducer from "./creditApprovalReducer";
import orderReducer from "./orderReducer";

const rootReducer = combineReducers({
  loginReducer,
  creditApprovalReducer,
  orderReducer
})

export default rootReducer;

// export default combineReducers({
//   user: userReducer
// });
