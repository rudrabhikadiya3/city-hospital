import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";

import { rootReducer } from "./rootReducer";
import { rootSaga } from "../saga/rootSaga";

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
  whitelist : ["auth"]
}


const sagaMiddleware = createSagaMiddleware();

const middlewares = [thunk, sagaMiddleware];
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, applyMiddleware(...middlewares));
export let persistor = persistStore(store);
sagaMiddleware.run(rootSaga);
