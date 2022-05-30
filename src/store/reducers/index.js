import { combineReducers } from "redux";
import membership from "./membership";
import email from "./email";
import selected from "./selected";
import user from "./user";
import content from "./content";

const rootReducer = combineReducers({
  membership,
  email,
  selected,
  user,
  content,
});

export default rootReducer;
