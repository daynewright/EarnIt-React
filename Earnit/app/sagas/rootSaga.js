import { fork } from 'redux-saga/effects';
import { watchSignInRequest, watchRegisterRequest } from './userSaga';
import { watchGetEvents, watchCreateEvent } from './eventSaga';
import { watchGetChildren } from './childrenSaga';

function startSagas(...sagas) {
  return function* rootSaga() {
    yield sagas.map(saga => fork(saga));
  };
}

const rootSaga = startSagas(
  watchSignInRequest,
  watchRegisterRequest,
  watchGetChildren,
  watchGetEvents,
  watchCreateEvent
);

export default rootSaga;
