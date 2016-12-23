import { fork } from 'redux-saga/effects';
import { watchSignInRequest, watchRegisterRequest } from './userSaga';

function startSagas(...sagas) {
  return function* rootSaga() {
    yield sagas.map(saga => fork(saga));
  };
}

const rootSaga = startSagas(
  watchSignInRequest,
  watchRegisterRequest
);

export default rootSaga;
