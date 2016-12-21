import { applyMiddleware, compose } from 'redux';
import React from 'react';
import rootReducer from '../reducers/rootReducer';
import Reactotron from 'reactotron-react-native';

const middleware = [];
// set up to use Reactotron.  Convert back to redux createStore for production
const store = Reactotron.createStore( rootReducer, applyMiddleware(...middleware) );


export default store;
