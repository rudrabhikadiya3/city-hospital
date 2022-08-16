function* watchAll() {
  yield all([watchAuth()]);
}
