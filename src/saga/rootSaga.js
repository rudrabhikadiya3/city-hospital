import { all } from "redux-saga/effects";
import { watchAuth } from "./auth.saga";

export function* rootSaga() {
  yield all([
    watchAuth()
  ]);
}
