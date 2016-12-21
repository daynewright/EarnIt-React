import initialState from './initialState';
import  * as actions from '../actions/actionTypes';

export default function userReducer(state = initialState.user, action) {
  switch (action.type) {
  case actions.LOGIN_USER:
    return {
      ...state,
      email: action.payload.email,
      password: action.payload.password
    };
  case actions.REGISTER_USER:
    return {
      ...state,
      email: action.payload.email,
      password: action.payload.password,
      confirmPassword: action.payload.confirmPassword
    };
  default:
    return state;
  }
};
