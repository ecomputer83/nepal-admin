import { combineReducers } from "redux";
import loginReducer from "./loginReducer";

const rootReducer = combineReducers({
  loginReducer: loginReducer
})

export default rootReducer;

// export default combineReducers({
//   user: userReducer
// });
