import { combineReducers } from "redux";
import { authReducer } from "./reducer/reducer.auth";

export const rootReducer = combineReducers({
    auth : authReducer
})