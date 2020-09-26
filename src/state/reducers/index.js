import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import creditApprovalReducer from "./creditApprovalReducer";
import orderReducer from "./orderReducer";
import userReducer from "./userReducer";
import articleReducer from "./articleReducer";
import adminReducer from "./adminReducer";


const rootReducer = combineReducers({
  loginReducer,
  creditApprovalReducer,
  orderReducer,
  userReducer,
  articleReducer,
  adminReducer
})

export default rootReducer;
