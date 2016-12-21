import { createStore, applyMiddleware } from 'redux';
import React from 'react';
import rootReducer from '../reducers/rootReducer';

const middleware = [];
const store = createStore( rootReducer, applyMiddleware(...middleware) );

export default store;
