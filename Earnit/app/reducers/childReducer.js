import initialState from './initialState';
import  * as actions from '../actions/actionTypes';

export default function childReducer(state = initialState.child, action) {
  switch (action.type) {
  case actions.CREATE_CHILD:
    return {
      ...state,
      child: action.payload.child,
      loading: false
    };
  case actions.CREATE_CHILD_SUCCESS:
    return {
      ...state,
      child: action.payload.child,
      loading: false
    };
  case actions.CREATE_CHILD_FAILURE:
    return {
      ...state,
      error: action.payload.error,
      loading: false
    };
  case actions.DELETE_CHILD:
    return {
      ...state,
      id: action.payload.id,
      loading: false
    };
  case actions.DELETE_CHILD_SUCCESS:
    return {
      ...state,
      loading: false
    };
  case actions.DELETE_CHILD_FAILURE:
    return {
      ...state,
      error: action.payload.error,
      loading: false
    };
  case actions.CHILD_ATTEMPT:
    return {
      ...state,
      loading: true
    };
  default:
    return state;
  }
}
