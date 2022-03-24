import { combineReducers } from "redux";
import membership from "./membership";
import email from "./email";
import profiles from "./profiles";
import selected from "./selected";
import user from "./user";

const rootReducer = combineReducers({
  membership,
  email,
  profiles,
  selected,
  user,
});

export default rootReducer;
