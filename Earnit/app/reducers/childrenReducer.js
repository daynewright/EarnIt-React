import initialState from './initialState';
import  * as actions from '../actions/actionTypes';

export default function childrenReducer(state = initialState.children, action) {
  switch (action.type) {
  case actions.GET_CHILDREN:
    return {
      ...state,
      loading: true
    };
  case actions.GET_CHILDREN_SUCCESS:
    return {
      ...state,
      childArray: action.payload.children,
      error: null,
      loading: false
    };
  case actions.GET_CHILDREN_FAILURE:
    return {
      ...state,
      error: action.payload.error,
      loading: false
    };
  // add new child to childArray
  case actions.CREATE_CHILD_SUCCESS:
    return {
      ...state,
      childArray: [...state.childArray, action.payload.child],
      error: null,
      loading: false
    };
  case actions.DELETE_CHILD_SUCCESS:
    return {
      ...state,
      childArray: [...state.childArray.slice(0, state.childArray.indexOf(state.childArray.find(c => c.childId === action.payload))),
                   ...state.childArray.slice(state.childArray.indexOf(state.childArray.find(c => c.childId === action.payload)) + 1)]
    };
  default:
    return state;
  }
}
