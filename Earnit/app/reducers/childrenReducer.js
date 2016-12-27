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
      loading: false
    };
  case actions.GET_CHILDREN_FAILURE:
    return {
      ...state,
      error: action.payload.error,
      loading: false
    };
  default:
    return state;
  }
}
