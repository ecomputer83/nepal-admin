import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import creditApprovalReducer from "./creditApprovalReducer";
import orderReducer from "./orderReducer";
import userReducer from "./userReducer";
import articleReducer from "./articleReducer";
import adminReducer from "./adminReducer";
import paymentReducer from "./paymentReducer";


const rootReducer = combineReducers({
  loginReducer,
  creditApprovalReducer,
  orderReducer,
  userReducer,
  articleReducer,
  adminReducer,
  paymentReducer
})

export default rootReducer;
