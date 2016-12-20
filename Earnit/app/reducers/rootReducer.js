import { combineReducers } from 'redux';
import loginReducer from '../reducers/loginReducer';

const rootReducer = combineReducers({
  // add reducers
  user: loginReducer
});

export default rootReducer;
