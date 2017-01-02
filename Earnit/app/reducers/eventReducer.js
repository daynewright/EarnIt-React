import initialState from './initialState';
import  * as actions from '../actions/actionTypes';

export default function eventsReducer(state = initialState.event, action) {
  switch (action.type) {
  case actions.SET_EVENT:
    return {
      ...state,
      ...action.payload
    };
  default:
    return state;
  };
}
