import initialState from './initialState';
import  * as actions from '../actions/actionTypes';

export default function childReducer(state = initialState.child, action) {
  switch (action.type) {
  case actions.CREATE_CHILD:
    return {
      ...state,
      name: action.payload.name,
      age: action.payload.age,
      loading: true
    };
  case actions.CREATE_CHILD_SUCCESS:
    return {
      ...state,
      name: action.payload.child.name,
      age: action.payload.child.age,
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
      loading: true
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
  default:
    return state;
  }
}
