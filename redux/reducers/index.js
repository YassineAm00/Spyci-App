import { combineReducers } from "redux";
import { Count } from "./count";

export const reducer = combineReducers({
  CountValue: Count,
});
