import { call, put, takeEvery, all } from "redux-saga/effects";
import * as ActionTypes from "../redux/ActionTypes";
import { newUsers } from "./usersAPI";

function* signUpSaga(action) {
  try {

    const user = yield call(newUsers, action.payload);
    // yield put({type: "USER_FETCH_SUCCEEDED", user: user});
  } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
  }
}

function* watchSignUP() {
  yield takeEvery(ActionTypes.SIGN_UP, signUpSaga);
}

export function* watchAuth() {
  yield all([
    watchSignUP()
  ])
}
