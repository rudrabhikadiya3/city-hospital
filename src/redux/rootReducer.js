import { combineReducers } from "redux";
import { alertReducer } from "./reducer/reducer.alert";
import { authReducer } from "./reducer/reducer.auth";

export const rootReducer = combineReducers({
    auth : authReducer,
    alert : alertReducer
})