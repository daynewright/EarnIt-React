import { combineReducers } from 'redux';
import userReducer from '../reducers/userReducer';
import childReducer from '../reducers/childReducer';
import childrenReducer from '../reducers/childrenReducer';

const rootReducer = combineReducers({
  // add reducers
  child: childReducer,
  user: userReducer,
  children: childrenReducer
});

export default rootReducer;
