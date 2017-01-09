import { fork } from 'redux-saga/effects';
import { watchSignInRequest, watchRegisterRequest } from './userSaga';
import { watchGetEvents, watchCreateEvent } from './eventSaga';
import { watchGetChildren } from './childrenSaga';
import { watchCreateChild, watchDeleteChild } from './childSaga';
import { watchCreateReward } from './rewardSaga';
import { watchCreatePoint, watchGetPoints } from './pointSaga';

function startSagas(...sagas) {
  return function* rootSaga() {
    yield sagas.map(saga => fork(saga));
  };
}

const rootSaga = startSagas(
  watchSignInRequest,
  watchRegisterRequest,
  watchGetChildren,
  watchCreateChild,
  watchDeleteChild,
  watchGetEvents,
  watchCreateEvent,
  watchCreateReward,
  watchCreatePoint,
  watchGetPoints
);

export default rootSaga;
