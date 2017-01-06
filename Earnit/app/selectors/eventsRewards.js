import { createSelect } from 'reselect';

const eventsArray = state => state.events.eventsArray;
const rewardsArray = state => state.rewards.rewardsArray;

const combineArrays = (events, rewards) => {
  const mergedState = [...events,  ...rewards];
  return mergedState;
};

export default createSelector(
  eventsArray,
  rewardsArray,
  combineArrays
);
