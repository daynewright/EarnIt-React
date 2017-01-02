import initialState from './initialState';
import  * as actions from '../actions/actionTypes';

export default function childReducer(state = initialState.child, action) {
  switch (action.type) {
  case actions.CREATE_CHILD:
    return {
      ...state,
      name: action.payload.name,
      age: action.payload.age,
      id: null,
      error: null,
      loading: true
    };
  case actions.SET_CHILD:
    return {
      ...state,
      name: action.payload.name,
      age: action.payload.age,
      id: action.payload.childId,
      error: null,
      loading: false
    };
  case actions.CREATE_CHILD_SUCCESS:
    return {
      ...state,
      name: action.payload.child.name,
      age: action.payload.child.age,
      id: action.payload.child.childId,
      error: null,
      loading: false
    };
  case actions.CREATE_CHILD_FAILURE:
    return {
      ...state,
      name: null,
      age: null,
      id: null,
      error: action.payload.error,
      loading: false
    };
  case actions.DELETE_CHILD:
    return {
      ...state,
      id: action.payload,
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
      name: null,
      age: null,
      id: null,
      error: action.payload.error,
      loading: false
    };
  default:
    return state;
  }
}
