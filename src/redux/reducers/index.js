import { combineReducers } from "redux";
import userInfo from "./userInfo";
import deviceInfo from "./deviceInfo";

export default combineReducers({
  userInfo: userInfo,
  deviceInfo: deviceInfo,
});
