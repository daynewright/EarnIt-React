import { combineReducers } from 'redux';
import userReducer from '../reducers/userReducer';
import childReducer from '../reducers/childReducer';
import childrenReducer from '../reducers/childrenReducer';
import eventReducer from '../reducers/eventReducer';
import eventsReducer from '../reducers/eventsReducer';
import rewardReducer from '../reducers/rewardReducer';
import rewardsReducer from '../reducers/rewardsReducer';

const rootReducer = combineReducers({
  // add reducers
  child: childReducer,
  user: userReducer,
  children: childrenReducer,
  events: eventsReducer,
  event: eventReducer,
  reward: rewardReducer,
  rewards: rewardsReducer
});

export default rootReducer;
