
import * as ActionTypes from "../ActionTypes";
const initVal = {
    text : "",
    color: ""
}
export const alertReducer = (state =initVal, action) =>{
    switch (action.type) {
        case ActionTypes.SET_ALERT:
            return{
                ...state,
                text: action.payload.text,
                color: action.payload.color
            }
        case ActionTypes.SET_ALERT:
            return{
                ...state,
                text: "",
                color: ""
            }
        
    
        default: return state;
    }
}