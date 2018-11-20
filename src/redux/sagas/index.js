import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import userSaga from './userSaga';
import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga
function* getSuggestedTaskSaga(action) {
  console.log('in getSuggestedTaskSaga');
  try {
    const response = yield call(axios.get, '/api/task');
    yield put( { type: 'SET_TASK', payload: response.data } )
  }
  catch(error) {
    console.log('error in GET request', error);
  }
}

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield takeEvery('GET_TASK', getSuggestedTaskSaga);
  
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
  ]);
}
