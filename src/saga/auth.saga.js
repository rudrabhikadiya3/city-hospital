import { call, put, takeEvery, all } from "redux-saga/effects";
import { setAlertValue } from "../redux/action/alert.action";
import { loggedInAction, loggedOutAction } from "../redux/action/auth.action";
import * as ActionTypes from "../redux/ActionTypes";
import { facebookNewUser, googleNewUser, LoginUser, logOutUser, newUsers, resetPassword } from "./usersAPI";

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

function* googleSignUpSaga() {
  try {
    const user = yield call(googleNewUser);
    yield put(loggedInAction(user))
    yield put(setAlertValue({type: ActionTypes.SET_ALERT, payload: {text : "You are successfully login with Google", color: "success"}}))
  } catch (e) {
    yield put(setAlertValue({type: ActionTypes.SET_ALERT, payload: {text : e, color: "error"}}))
  }
}
function* facebookSignUpSaga() {
  try {
    const user = yield call(facebookNewUser);
    yield put(loggedInAction(user))
    yield put(setAlertValue({type: ActionTypes.SET_ALERT, payload: {text : "You are successfully login with Facebook", color: "success"}}))
  } catch (e) {
    yield put(setAlertValue({type: ActionTypes.SET_ALERT, payload: {text : e, color: "error"}}))
  }
}

function* resetPasswordSaga(action) {
  try {
    const user = yield call(resetPassword, action.payload);
    yield put(setAlertValue({type: ActionTypes.SET_ALERT, payload: {text : user.payload, color: "success"}}))
  } catch (e) {
    yield put(setAlertValue({type: ActionTypes.SET_ALERT, payload: {text : e, color: "error"}}))
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
function* watchGoogleSignIn() {
  yield takeEvery(ActionTypes.GOOGLE_SIGN_UP, googleSignUpSaga); 
}
function* watchFacebookSignIn() {
  yield takeEvery(ActionTypes.FACEBOOK_SIGN_UP, facebookSignUpSaga); 
}
function* watchResetPassword() {
  yield takeEvery(ActionTypes.PASSWOED_RESET, resetPasswordSaga); 
}

// combine watcher
export function* watchAuth() {
  yield all([watchSignUP(), watchLogin(), watchLogOut(), watchGoogleSignIn(), watchFacebookSignIn(), watchResetPassword()]);
}