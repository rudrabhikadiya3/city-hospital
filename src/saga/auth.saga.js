import { call, put, takeEvery, all } from "redux-saga/effects";
import { setAlertValue } from "../redux/action/alert.action";
import * as ActionTypes from "../redux/ActionTypes";
import { LoginUser, newUsers } from "./usersAPI";

function* signUpSaga(action) {
  try {
    const user = yield call(newUsers, action.payload);
    yield put(setAlertValue({type: ActionTypes.SET_ALERT, payload: { text : user, color: "success"}}))
  } catch (e) {
    yield put(setAlertValue({type: ActionTypes.SET_ALERT, payload: { text : e, color: "error"}}))
  }
}

function* LoginSaga(action) {
  try {
    const user = yield call(LoginUser, action.payload);
    yield put(setAlertValue({type: ActionTypes.SET_ALERT, payload: { text : user, color: "success"}}))
  } catch (e) {; 
    yield put(setAlertValue({type: ActionTypes.SET_ALERT, payload: { text : e, color: "error"}}))
  }
}


function* watchSignUP() {
  yield takeEvery(ActionTypes.SIGN_UP, signUpSaga);
}
function* watchLogin() {
  yield takeEvery(ActionTypes.LOG_IN, LoginSaga); 
}

export function* watchAuth() {
  yield all([watchSignUP(), watchLogin()]);
}
