import { takeEvery } from 'redux-saga';
import { take, call, put, fork } from 'redux-saga/effects';
import * as actionCreators from '../actions/actionCreator';

export function* fetchUser(user) {
  try {
    const data = yield call(fetch, 'http://138.197.44.210/account/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: user.email,
        password: user.password
      })
    });
    yield put(actionCreators.getUserFromLogin(data));
  }
  catch (error) {
    yield put(actionCreators.userLoginFailed());
  }
}
