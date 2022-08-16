import * as ActionTypes from "../ActionTypes";
import { useDispatch } from "react-redux";

export const sighUpAction = (values) => (dispatch) => {
    dispatch({type: ActionTypes.SIGN_UP , payload: values})

    console.log(values);
}