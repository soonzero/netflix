import { combineReducers } from "redux";
import membership from "./membership";
import email from "./email";
import profiles from "./profiles";

const rootReducer = combineReducers({ membership, email, profiles });

export default rootReducer;
