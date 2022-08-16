import { call, put, takeEvery, takeLatest, all } from "redux-saga/effects";
import * as ActionTypes from "../ActionTypes";

function* signUpSaga(action) {
  try {
    //   const user = yield call(Api.fetchUser, action.payload.userId);
    yield put({ type: ActionTypes.SIGN_UP, user: action.payload });
  } catch (e) {
    //   yield put({type: "USER_FETCH_FAILED", message: e.message});
  }
}

function* mySaga() {
  yield takeEvery(ActionTypes.SIGN_UP, signUpSaga);
}

function* watchAuth() {
  yield all([
    signUpSaga()
  ])
}



export default mySaga;
