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

function* createChild(action) {
  try {
    const data = yield call(fetch, 'http://138.197.44.210/child/create',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Name: action.payload.name,
        ImageURL: action.payload.imageURL,
        Age: action.payload.age
      })
    });
    if (data.status === 400) {
      const error = yield data.json();
      yield put(actionCreators.failureCreateChild(error));
    }
    else {
      const child = yield data.json();
      yield put(actionCreators.successCreateChild(child));
    }
  }
  catch (error) {
    yield put(actionCreators.failureCreateChild(error));
  }
}

function* deleteChild(action) {
  try {
    const data = yield call(fetch, `http://138.197.44.210/child/remove/${action.payload.id}`);
    if (data.status === 400) {
      const error = yield data.json();
      yield put(actionCreators.failureDeleteChild(error));
    }
    else {
      yield put(actionCreators.successDeleteChild());
    }
  }
  catch (error) {
    yield put(actionCreators.failureDeleteChild(error));
  }
}

// Export watch functions for generators //
export function* watchGetChildren() {
  yield* takeEvery(actions.GET_CHILDREN, getChildren);
}

export function* watchCreateChild() {
  yield* takeEvery(actions.CREATE_CHILD, createChild);
}

export function* watchDeleteChild() {
  yield* takeEvery(actions.DELETE_CHILD, deleteChild);
}
