import initialState from './initialState';
import  * as actions from '../actions/actionTypes';

export default function rewardReducer(state = initialState.reward, action) {
  switch (action.type) {
  case actions.CREATE_REWARD:
    return {
      ...state,
      ...action.payload,
      failure: false,
      error: null,
      loading: true
    };
  case actions.CREATE_REWARD_SUCCESS:
    return {
      ...state,
      name: action.payload.data.reward.name,
      description: action.payload.data.reward.description,
      imageURL: action.payload.data.reward.imageURL,
      eventId: action.payload.data.eventId,
      rewardId: action.payload.data.reward.rewardId,
      pointsNeeded: action.payload.data.reward.pointsNeeded,
      failure: false,
      error: null,
      loading: false
    };
  case actions.CREATE_REWARD_FAILURE:
    return {
      ...state,
      name: null,
      description: null,
      imageURL: null,
      eventId: null,
      pointsNeeded: null,
      failure: true,
      error: action.payload,
      loading: false
    };
  default:
    return state;
  };
}
