mport { takeEvery } from 'redux-saga';
import { take, call, put } from 'redux-saga/effects';
import * as actionCreators from '../actions/actionCreators';
import * as actions from '../actions/actionTypes';

function* createPoint(action) {
  try {
    const data = yield call(fetch, 'http://138.197.44.210/eventpoint/create',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        EventId: action.payload,
        Point: true
      })
    });
    if (data.status === 400) {
      const error = yield data.json();
      yield put(actionCreators.failureCreatePoint(error));
    }
    else {
      const point = yield data.json();
      yield put(actionCreators.successCreatePoint(point));
    }
  }
  catch (error) {
    yield put(actionCreators.failureCreatePoint(error));
  }
}

function* getPoints(action) {
  try {
    const data = yield call(fetch, `http://138.197.44.210/eventpoint/all/${action.payload}`);
    if (data.status === 400) {
      const error = yield data.json();
      yield put(actionCreators.getPointsFailure(error));
    }
    else {
      const points = yield data.json();
      yield put(actionCreators.getPointsSuccess(points));
    }
  }
  catch (error) {
    yield put(actionCreators.getPointsFailure(error));
  }
}

// Export watch functions for generators //
export function* watchCreatePoint() {
  yield* takeEvery(actions.CREATE_POINT, createPoint);
}

export function* watchGetPoints() {
  yield* takeEvery(actions.GET_POINTS, getPoints);
}
