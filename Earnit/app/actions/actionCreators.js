import * as actions from './actionTypes';

export function loginUser(user) {
  return { type: actions.LOGIN_USER, payload: user };
};

export function registerUser(user) {
  return { type: actions.REGISTER_USER, payload: user };
}
