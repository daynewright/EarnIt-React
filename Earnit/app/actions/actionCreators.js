import * as actions from './actionTypes';

export function LoginUser(user) {
  return { type: action.LOGIN_USER, payload: user };
};
