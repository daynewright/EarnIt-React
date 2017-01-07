import { createSelector } from 'reselect';
import { Alert } from 'react-native';

const eventsArray = state => state.events.eventsArray;
const rewardsArray = state => state.rewards.rewardsArray;

const combineArrays = (events, rewards) => {
  const mergedState = {
    eventsArray: events.map(event => {
      const reward = rewards.find(r => event.rewardId === r.rewardId);
      console.log("*********", reward);
      if (reward) {
        return {...event, ...reward};
      }
      return event;
    })
  };
  // {eventsArray: [...events],  rewardsArray: [...rewards]};
  return mergedState;
};

export default createSelector(
  eventsArray,
  rewardsArray,
  combineArrays
);
