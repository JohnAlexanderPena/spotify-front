import { combineReducers } from "redux";
import userInfo from "./userInfo";
import deviceInfo from "./deviceInfo";
import browseInfo from "./browseReducer";

export default combineReducers({
  userInfo: userInfo,
  deviceInfo: deviceInfo,
  browseInfo: browseInfo,
});
