import { combineReducers } from "redux";
import itemReducer from "./itemReduvers";

export default combineReducers({
  items: itemReducer,
});
