import { combineReducers } from 'redux';
import userReducer from '../reducers/userReducer';
import childReducer from '../reducers/childReducer';

const rootReducer = combineReducers({
  // add reducers
  child: childReducer,
  user: userReducer
});

export default rootReducer;
