import * as ActionTypes from "../ActionTypes";

export const sighUpAction = (values) => (dispatch) => {
    dispatch({type: ActionTypes.SIGN_UP , payload: values})
}

export const loginAction = (values) => (dispatch)=>{
    dispatch({type: ActionTypes.LOG_IN, payload: values})
}