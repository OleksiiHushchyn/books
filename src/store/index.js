import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import {createLogger} from 'redux-logger';
import rootReducer from './rootReducer';
import booksSaga from './books/saga';

const sagaMiddleware = createSagaMiddleware();

const logger = createLogger({
    diff: true,
});

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger))

sagaMiddleware.run(booksSaga)

export default store;
