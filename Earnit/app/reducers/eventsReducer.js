import initialState from './initialState';
import  * as actions from '../actions/actionTypes';

export default function eventsReducer(state = initialState.events, action) {
  switch (action.type) {
  case actions.CREATE_EVENT_SUCCESS:
    return {
      ...state,
      eventsArray: [...state.eventsArray,
        {
          eventId: action.payload.newEvent.eventId,
          name: action.payload.newEvent.name,
          description: action.payload.newEvent.description,
          imageURL: action.payload.newEvent.imageURL,
          isActive: action.payload.newEvent.isActive,
          rewardId: action.payload.newEvent.rewardId
        }],
      error: null,
      loading: false
    };
  case actions.CREATE_REWARD_SUCCESS:
    return {
      ...state,
      eventsArray: [
        ...state.eventsArray,
        ...state.eventsArray[state.eventsArray.findIndex(e => e.eventId === action.payload.data.eventId)].rewardId = action.payload.data.reward.rewardId
      ]
    };
  case actions.CREATE_EVENT_FAILURE:
    return {
      ...state,
      error: action.payload.error,
      loading: false
    };
  case actions.GET_EVENTS:
    return {
      ...state,
      eventsArray: [],
      error: null,
      loading: true
    };
  case actions.RESET_EVENTS:
    return {
      ...state,
      eventsArray: [],
      error: null,
      loading: false
    };
  case actions.GET_EVENTS_SUCCESS:
    return {
      ...state,
      eventsArray: action.payload,
      error: null,
      loading: false
    };
  case actions.GET_EVENTS_FAILURE:
    return {
      ...state,
      eventsArray: [],
      error: action.payload.error,
      loading: false
    };
  default:
    return state;
  }
};
