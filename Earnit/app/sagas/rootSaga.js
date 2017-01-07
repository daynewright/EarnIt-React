import { fork } from 'redux-saga/effects';
import { watchSignInRequest, watchRegisterRequest } from './userSaga';
import { watchGetEvents, watchCreateEvent } from './eventSaga';
import { watchGetChildren } from './childrenSaga';
import { watchCreateChild, watchDeleteChild } from './childSaga';
import { watchCreateReward, watchGetReward } from './rewardSaga';

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
  watchGetReward
);

export default rootSaga;
