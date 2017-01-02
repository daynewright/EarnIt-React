import initialState from './initialState';
import  * as actions from '../actions/actionTypes';

export default function eventsReducer(state = initialState.events, action) {
  switch (action.type) {
  case action.CREATE_EVENT:
    return {
      ...state,
      event: action.payload,
      loading: true
    };
  case actions.CREATE_EVENT_SUCCESS:
    return {
      ...state,
      eventsArray: [...state.eventsArray,
        {
          eventID: action.payload.newEvent.eventId,
          name: action.payload.newEvent.name,
          description: action.payload.newEvent.description,
          imageURL: action.payload.newEvent.imageURL,
          isActive: action.payload.newEvent.isActive
        }],
      loading: false
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
      loading: true
    };
  case actions.GET_EVENTS_SUCCESS:
    return {
      ...state,
      eventsArray: action.payload,
      loading: false
    };
  case actions.GET_EVENTS_FAILURE:
    return {
      ...state,
      error: action.payload.error,
      loading: false
    };
  default:
    return state;
  }
};
