import { takeEvery } from 'redux-saga';
import { take, call, put } from 'redux-saga/effects';
import * as actionCreators from '../actions/actionCreators';
import * as actions from '../actions/actionTypes';

function* createReward(action) {
  try {
    const data = yield call(fetch, `http://138.197.44.210/reward/create/${action.payload.eventId}`,{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Name: action.payload.name,
        Description: action.payload.description,
        PointsNeeded: action.payload.pointsNeeded,
        ImageURL: null
      })
    });
    if (data.status === 400) {
      const error = yield data.json();
      yield put(actionCreators.failureCreateReward(error));
    }
    else {
      const child = yield data.json();
      yield put(actionCreators.successCreateReward(reward));
    }
  }
  catch (error) {
    yield put(actionCreators.failureCreateChild(error));
  }
}

// function* deleteChild(action) {
//   try {
//     const data = yield call(fetch, `http://138.197.44.210/child/remove/${action.payload}`,
//       {
//         method: 'DELETE',
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json',
//         }
//       });
//     if (data.status === 400) {
//       const error = yield data.json();
//       yield put(actionCreators.failureDeleteChild(error));
//     }
//     else {
//       yield put(actionCreators.successDeleteChild(action.payload));
//     }
//   }
//   catch (error) {
//     yield put(actionCreators.failureDeleteChild(error));
//   }
// }

// Export watch functions for generators //
export function* watchCreateReward() {
  yield* takeEvery(actions.CREATE_REWARD, createReward);
}

// export function* watchDeleteChild() {
//   yield* takeEvery(actions.DELETE_CHILD, deleteChild);
// }
