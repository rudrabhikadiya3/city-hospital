import { call, put, takeEvery, all } from "redux-saga/effects";
import * as ActionTypes from "../redux/ActionTypes";
import { LoginUser, newUsers } from "./usersAPI";

function* signUpSaga(action) {
  try {
    const user = yield call(newUsers, action.payload);
    console.log(user);
  } catch (e) {
    yield put({ type: "USER_FETCH_FAILED", message: e.message });
    console.log(e);
  }
}
function* LoginSaga(action) {
  try {
    const user = yield call(LoginUser, action.payload);
    console.log(user);
  } catch (e) {
    console.log(e);
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
