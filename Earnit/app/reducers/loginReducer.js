import * as actions from '../actions/actionTypes';
import initialState from './initialState';

export default function loginReducer(state = initialState.user, action) {
  switch (action.type) {
  case action.LOGIN_USER:
    return {
      ...state,
      email: action.payload.email,
      password: action.payload.password
    };
  default:
    return state;
  }
};
