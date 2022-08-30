import { call, put, takeEvery, all } from "redux-saga/effects";
import { setAlertValue } from "../redux/action/alert.action";
import { loggedInAction, loggedOutAction } from "../redux/action/auth.action";
import * as ActionTypes from "../redux/ActionTypes";
import { LoginUser, logOutUser, newUsers } from "./usersAPI";

function* signUpSaga(action) {
  try {
    const user = yield call(newUsers, action.payload);
    yield put(setAlertValue({type: ActionTypes.SET_ALERT, payload: {text : user, color: "success"}}))
  } catch (e) {
    yield put(setAlertValue({type: ActionTypes.SET_ALERT, payload: {text : e, color: "error"}}))
  }
}

function* LoginSaga(action) {
  try {
    const user = yield call(LoginUser, action.payload);
    yield put(loggedInAction(user))
    yield put(setAlertValue({type: ActionTypes.SET_ALERT, payload:{text: "Login Successfully", color: "success"}}))
  } catch (e) {; 
    yield put(setAlertValue({type: ActionTypes.SET_ALERT, payload:{text: e, color: "error"}}))
  }
}

function* LogOutSaga(action) {
  try {
    const user = yield call(logOutUser, action.payload);
    yield put(loggedOutAction({type: ActionTypes.LOGGED_OUT})) 
    yield put(setAlertValue({type: ActionTypes.SET_ALERT, payload: {text: user.payload, color: "success"}})) 
  } catch (e) {; 
    yield put(loggedOutAction({type: ActionTypes.SET_ALERT, payload: {text : e, color: "error"}}))
  }
}

// watchers
function* watchSignUP() {
  yield takeEvery(ActionTypes.SIGN_UP, signUpSaga);
}
function* watchLogin() {
  yield takeEvery(ActionTypes.LOG_IN, LoginSaga); 
}
function* watchLogOut() {
  yield takeEvery(ActionTypes.LOG_OUT, LogOutSaga); 
}

export function* watchAuth() {
  yield all([watchSignUP(), watchLogin(), watchLogOut()]);
}