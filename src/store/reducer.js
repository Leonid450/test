import { combineReducers } from "redux";
import userReducer from "./slices/userSlice";

const rootReducer = combineReducers({
  userStore: userReducer,
});

export default rootReducer;
