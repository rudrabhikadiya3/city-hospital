
import * as ActionTypes from "../ActionTypes";

export const setAlertValue = (data) => (dispatch) => {
    console.log(data.payload);
    dispatch({type: ActionTypes.SET_ALERT, payload: data.payload})
}
export const resetAlertValue = () => (dispatch) =>{
    dispatch({type: ActionTypes.RESET_ALERT})
}