import { combineReducers } from 'redux';
import userReducer from '../reducers/userReducer';
import childReducer from '../reducers/childReducer';
import childrenReducer from '../reducers/childrenReducer';
import eventsReducer from '../reducers/eventsReducer';
import eventReducer from '../reducers/eventReducer';

const rootReducer = combineReducers({
  // add reducers
  child: childReducer,
  user: userReducer,
  children: childrenReducer,
  events: eventsReducer,
  event: eventReducer
});

export default rootReducer;
