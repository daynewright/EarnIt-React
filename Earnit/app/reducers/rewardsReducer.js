import initialState from './initialState';
import  * as actions from '../actions/actionTypes';

export default function rewardsReducer(state = initialState.rewards, action) {
  switch (action.type) {
  case actions.CREATE_REWARD_SUCCESS:
    return {
      ...state,
      rewardsArray: [...state.rewardsArray,
        {
          eventId: action.payload.data.eventId,
          rewardId: action.payload.data.reward.rewardId,
          name: action.payload.data.reward.name,
          description: action.payload.data.reward.description,
          imageURL: action.payload.data.reward.imageURL
        }],
      error: null,
      loading: false
    };
  case actions.CREATE_REWARD_FAILURE:
    return {
      ...state,
      error: action.payload.error,
      loading: false
    };
  case actions.GET_REWARDS:
    return {
      ...state,
      rewardsArray: [],
      error: null,
      loading: true
    };
  case actions.RESET_REWARDS:
    return {
      ...state,
      rewardsArray: [],
      error: null,
      loading: false
    };
  case actions.GET_REWARDS_SUCCESS:
    return {
      ...state,
      rewardsArray: action.payload,
      error: null,
      loading: false
    };
  case actions.GET_REWARDS_FAILURE:
    return {
      ...state,
      rewardsArray: [],
      error: action.payload.error,
      loading: false
    };
  default:
    return state;
  }
};
