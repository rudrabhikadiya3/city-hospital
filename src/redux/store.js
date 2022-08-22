import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'

import { rootReducer } from './rootReducer'
import mySaga from '../saga/auth.saga'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const middlewares = [thunk, sagaMiddleware]
// mount it on the Store
export const store = createStore(
    rootReducer,
  applyMiddleware(...middlewares)
)

// then run the saga
sagaMiddleware.run(mySaga)

// render the application