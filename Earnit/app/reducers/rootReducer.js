import { combineReducers } from 'redux';
import userReducer from '../reducers/userReducer';

const rootReducer = combineReducers({
  // add reducers
  user: userReducer
});

export default rootReducer;
