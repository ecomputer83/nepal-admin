import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import creditApprovalReducer from "./creditApprovalReducer";
import orderReducer from "./orderReducer";
import userReducer from "./userReducer";
import articleReducer from "./articleReducer";


const rootReducer = combineReducers({
  loginReducer,
  creditApprovalReducer,
  orderReducer,
  userReducer,
  articleReducer
})

export default rootReducer;
