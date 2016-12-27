import { takeEvery } from 'redux-saga';
import { take, call, put } from 'redux-saga/effects';
import * as actionCreators from '../actions/actionCreators';
import * as actions from '../actions/actionTypes';

function* getChildren() {
  try {
    const data = yield call(fetch, 'http://138.197.44.210/child/all');
    if (data.status === 400) {
      const error = yield data.json();
      yield put(actionCreators.failureGetChildren(error));
    }
    else {
      const children = yield data.json();
      yield put(actionCreators.successGetChildren(children));
    }
  }
  catch (error) {
    yield put(actionCreators.failureGetChildren(error));
  }
}

export function* watchGetChildren() {
  yield* takeEvery(actions.GET_CHILDREN, getChildren);
}
