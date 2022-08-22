import { all } from "redux-saga/effects";

function* watchAll() {
  yield all([watchAuth()]);
}
