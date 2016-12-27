import { takeEvery } from 'redux-saga';
import { take, call, put } from 'redux-saga/effects';
import * as actionCreators from '../actions/actionCreators';
import * as actions from '../actions/actionTypes';

function* loginUser(action) {
  try {
    const data = yield call(fetch, 'http://138.197.44.210/account/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: action.payload.email,
        password: action.payload.password
      })
    });
    if (data.status === 400) {
      const error = yield data.json();
      yield put(actionCreators.failureUserLogin(error));
    }
    else {
      const data = yield call(fetch, 'http://138.197.44.210/account/getuser');
      const user = yield data.json();
      yield put(actionCreators.successUserLogin(user));
    }
  }
  catch (error) {
    yield put(actionCreators.failureUserLogin(error));
  }
}

function* registerUser(action) {
  try {
    const data = yield call(fetch, 'http://138.197.44.210/account/register', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: action.payload.email,
        password: action.payload.password,
        confirmPassword: action.payload.confirmPassword
      })
    });
    if (data.status === 400) {
      const error = yield data.json();
      yield put(actionCreators.failureRegisterUser(error));
    }
    else {
      const user = data.json();
      yield put(actionCreators.successRegisterUser(user));
    }
  }
  catch (error) {
    yield put(actionsCreators.failureRegisterUser(error));
  }
}

export function* watchSignInRequest() {
  yield* takeEvery(actions.LOGIN_USER, loginUser);
}

export function* watchRegisterRequest() {
  yield* takeEvery(actions.REGISTER_USER, registerUser);
}
