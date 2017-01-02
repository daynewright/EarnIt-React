import { takeEvery } from 'redux-saga';
import { take, call, put } from 'redux-saga/effects';
import * as actionCreators from '../actions/actionCreators';
import * as actions from '../actions/actionTypes';

function* createEvent(action) {
  try {
    const data = yield call(fetch, 'http://138.197.44.210/event/create',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Name: action.payload.name,
        Description: action.payload.description,
        Type: action.payload.type
      })
    });
    if (data.status === 400) {
      const error = yield data.json();
      yield put(actionCreators.failureCreateEvent(error));
    }
    else {
      const event = yield data.json();
      yield put(actionCreators.successCreateEvent(event));
    }
  }
  catch (error) {
    yield put(actionCreators.failureCreateEvent(error));
  }
}

function* getEvents(action) {
  try {
    const data = yield call(fetch, `http://138.197.44.210/event/all/${action.payload}`);
    if (data.status === 400) {
      const error = yield data.json();
      yield put(actionCreators.getEventsFailure(error));
    }
    else {
      const events = yield data.json();
      yield put(actionCreators.getEventsSuccess(events));
    }
  }
  catch (error) {
    yield put(actionCreators.getEventsFailure(error));
  }
}

// Export watch functions for generators //
export function* watchCreateEvent() {
  yield* takeEvery(actions.CREATE_EVENT, createEvent);
}

export function* watchGetEvents() {
  yield* takeEvery(actions.GET_EVENTS, getEvents);
}
