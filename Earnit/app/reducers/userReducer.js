import initialState from './initialState';
import  * as actions from '../actions/actionTypes';

export default function userReducer(state = initialState.user, action) {
  switch (action.type) {
    // Login reducers
  case actions.LOGIN_USER:
    return {
      ...state,
      email: action.payload.email,
      password: action.payload.password,
    };
  case actions.LOGIN_USER_SUCCESS:
    return {
      ...state,
      id: action.payload.user.id,
      password: '',
      loading: false,
      login: true
    };
  case actions.LOGIN_USER_FAILURE:
    return {
      ...state,
      error: action.payload,
      id: null,
      email: '',
      password: '',
      loading: false,
      login: false
    };
  // register reducers
  case actions.REGISTER_USER:
    return {
      ...state,
      email: action.payload.email,
      password: action.payload.password,
      confirmPassword: action.payload.confirmPassword,
      login: false
    };
  case actions.REGISTER_USER_SUCCESS:
    return {
      ...state,
      id: action.payload.data.user.id,
      password: '',
      confirmPassword: '',
      loading: false,
      login: true
    };
  case actions.REGISTER_USER_FAILURE:
    return {
      ...state,
      error: `Unable to register user with email ${state.user.email}.`,
      user: {},
      loading: false,
      login: false
    };
  // loading for register and login
  case actions.ATTEMPTING_REG_OR_LOGIN:
    return {
      ...state,
      loading: true,
      login: false
    };
  default:
    return state;
  }
};
