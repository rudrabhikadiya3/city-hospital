import * as ActionTypes from "../ActionTypes";

export const sighUpAction = (values) => (dispatch) => {
    dispatch({type: ActionTypes.SIGN_UP , payload: values})
}

export const loginAction = (values) => (dispatch)=>{
    dispatch({type: ActionTypes.LOG_IN, payload: values})
}

export const loggedInAction = (data) => (dispatch) =>{
    dispatch({type: ActionTypes.LOGGED_IN, payload: data})
}
export const loggedOutAction = () => (dispatch) =>{
    dispatch({type: ActionTypes.LOGGED_OUT})
}

export const logOutAction = () => (dispatch) => {
    dispatch({type: ActionTypes.LOG_OUT})
};

