import { combineReducers } from "redux";
import membership from "./membership";
import email from "./email";

const rootReducer = combineReducers({ membership, email });

export default rootReducer;
