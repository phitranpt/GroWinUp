import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import userSaga from './userSaga';
import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// POST feedback to Admin
function* addFeedbackToAdmin(action) {
  console.log('in addFeedbackToAdmin', action.payload);
  try {
    yield call(axios.put, '/api/complete/', action.payload);
    yield put( { type: 'GET_TODO', payload: action.payload.completeUserId } );
  }
  catch(error) {
    console.log('error with POST completed task request', error);
  }
}

//POST new task to db
function* addNewTaskSaga(action) {
  console.log('in addNewTaskSaga', action.payload);
  try {
    yield call(axios.post, '/api/task/', action.payload);
    yield put( { type: 'GET_TASK' } );
  }
  catch(error) {
    console.log('error with POST new task request', error);
  }
}

//POST new task into user todo list
function* addTaskToUser(action) {
  console.log('in addTaskToUser', action.payload);
  try {
    yield call(axios.post, `/api/todo/`, action.payload);
    yield put( { type: 'GET_TODO', payload: action.payload.userId } );
    yield put( { type: 'GET_TASK', payload: action.payload.userId } );
  }
  catch(error) {
    console.log('error with POST new task to todo list request', error);
  }
}

//DELETE person from db
function* deletePersonSaga(action) {
  console.log('in deletePersonSaga', action);
  try {
    yield call(axios.delete, `/api/person/${action.payload}`);
    yield put( { type: 'GET_PERSON' } );
  }
  catch(error) {
    console.log('error in DELETE person request', error);
  }
}

//GET list of persons who are not admins from db
function* getPersonListSaga(action) {
  console.log('in getPersonList');
  try {
    const response = yield call(axios.get, '/api/person/');
    yield put( { type: 'SET_PERSON', payload: response.data } )
  }
  catch(error) {
    console.log('error in GET request', error);
  }
}

//GET list of suggested tasks from db
function* getSuggestedTaskSaga(action) {
  console.log('in getSuggestedTaskSaga');
  try {
    const response = yield call(axios.get, `/api/task/`);
    yield put( { type: 'SET_TASK', payload: response.data } )
  }
  catch(error) {
    console.log('error in GET request', error);
  }
}

//GET to do list for each person from db
function* getToDoListSaga(action) {
  console.log('in getToDoListSaga', action.payload);
  try {
    const response = yield call(axios.get, `/api/todo/${action.payload}`);
    yield put( { type: 'SET_TODO', payload: response.data } )
  }
  catch(error) {
    console.log('error in GET request', error);
  }
}

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield takeEvery('ADD_NEW_TASK', addNewTaskSaga);
  yield takeEvery('ADD_TASK_TO_USER', addTaskToUser);
  yield takeEvery('DELETE_PERSON', deletePersonSaga);
  yield takeEvery('GET_PERSON', getPersonListSaga);
  yield takeEvery('GET_TODO', getToDoListSaga);
  yield takeEvery('GET_TASK', getSuggestedTaskSaga);
  yield takeEvery('ADD_FEEDBACK_TO_ADMIN', addFeedbackToAdmin);
  
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
  ]);
}
