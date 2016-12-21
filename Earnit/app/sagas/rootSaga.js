import { fork } from 'redux-saga/effects';
import { fetchUser } from './userSaga';

function startSagas(...sagas) {
  return function* rootSaga() {
    yield sagas.map(saga => fork(saga));
  };
}

const rootSaga = startSagas(
  fetchUser
);

export default rootSaga;
