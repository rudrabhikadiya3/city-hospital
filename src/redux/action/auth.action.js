import * as ActionTypes from "../ActionTypes";

export const sighUpAction = (values) => (dispatch) => {
    dispatch({type: ActionTypes.SIGN_UP , payload: values})
}