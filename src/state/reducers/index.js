import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import creditApprovalReducer from "./creditApprovalReducer";
import orderReducer from "./orderReducer";
import userReducer from "./userReducer";


const rootReducer = combineReducers({
  loginReducer,
  creditApprovalReducer,
  orderReducer,
  userReducer
})

export default rootReducer;

// export default combineReducers({
//   user: userReducer
// });
