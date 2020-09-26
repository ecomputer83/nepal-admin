import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import creditApprovalReducer from "./creditApprovalReducer";
import orderReducer from "./orderReducer";
import articleReducer from "./articleReducer";

const rootReducer = combineReducers({
  loginReducer,
  creditApprovalReducer,
  orderReducer,
  articleReducer
})

export default rootReducer;
