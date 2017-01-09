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
          rewardId: action.payload.newEvent.rewardId,
          earnedPoints: 0
        }],
      error: null,
      loading: false
    };
  case actions.CREATE_POINT_SUCCESS:
    return {
      ...state,
      eventsArray: state.eventsArray.map((event, i) => event.eventId === action.payload.eventId ? {...event, earnedPoints: event.earnedPoints + 1 } : event )
    };
  case actions.CREATE_REWARD_SUCCESS:
    return {
      ...state,
      eventsArray: state.eventsArray.map((event, i) => event.eventId === action.payload.data.eventId ? {...event, rewardId: action.payload.data.reward.rewardId } : event )
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
  case actions.GET_EVENTS_SUCCESS:
    return {
      ...state,
      eventsArray: action.payload.map(event => ({ ...event, earnedPoints: 0 }) ),
      error: null,
      loading: false,
      loadingPoints: true
    };
  case actions.GET_EVENTS_FAILURE:
    return {
      ...state,
      eventsArray: [],
      error: action.payload.error,
      loading: false
    };
  case actions.GET_POINTS:
    return {
      ...state,
      loadingPoints: true
    };
  case actions.GET_POINTS_SUCCESS:
    return {
      ...state,
      eventsArray: state.eventsArray.map((event) => {
        action.payload.forEach((point) => {
          if (event.eventId === point.eventId) {
            event.earnedPoints = event.earnedPoints ? (event.earnedPoints + 1) : 1;
          }
        });
        return {...event};
      }),
      loadingPoints: false
    };
  case actions.RESET_EVENTS:
    return {
      ...state,
      eventsArray: [],
      error: null,
      loading: false
    };
  default:
    return state;
  }
};
