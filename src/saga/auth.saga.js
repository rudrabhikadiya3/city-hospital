// import { call, put, takeEvery, all } from "redux-saga";
import { all, call, put, takeEvery } from "redux-saga/effects";
import * as ActionTypes from "../redux/ActionTypes";
import { LoginUser, newUsers } from "./usersAPI";

export function* signUpSaga(action) {
  try {
    const user = yield call(newUsers, action.payload);
    // console.log(user);
  } catch (e) {
    // console.log(e);
    yield put({ type: ActionTypes.PASS_ERROR, payload: e });
  }
}
function* LoginSaga(action) {
  try {
    const user = yield call(LoginUser, action.payload);
    // console.log(user);
  } catch (e) {
    // console.log(e);
    yield put({ type: ActionTypes.PASS_ERROR, payload: e });
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
