import { applyMiddleware, compose } from 'redux';
import React from 'react';
import rootReducer from '../reducers/rootReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/rootSaga';
import Reactotron from 'reactotron-react-native';
import createLogger from 'redux-logger';

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();

const middleware = [sagaMiddleware, logger];

// set up to use Reactotron & logger.  Convert back to redux createStore for production
const store = Reactotron.createStore( rootReducer, applyMiddleware(...middleware) );

sagaMiddleware.run(rootSaga);

export default store;
