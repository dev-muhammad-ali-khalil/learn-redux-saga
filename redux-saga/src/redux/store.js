import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers/index.js'
import mySaga from './sagas/watchers.js'

const sagaMiddleWare = createSagaMiddleware();
export const reduxStore = createStore(rootReducer, applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(mySaga);