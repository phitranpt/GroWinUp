import { combineReducers } from 'redux';
import errors from './errorsReducer';
import loginMode from './loginModeReducer';
import user from './userReducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga
const personList = (state = [], action) => {
  switch (action.type) {
    case 'SET_PERSON':
      return action.payload
    default:
      return state;
  }
}

const taskList = (state = [], action) => {
  switch (action.type) {
    case 'SET_TASK':
      return action.payload
    default:
      return state;
  }
}

const todoList = (state = [], action) => {
  switch (action.type) {
    case 'SET_TODO':
      return action.payload
    default:
      return state;
  }
}

const completeList = (state = [], action) => {
  switch (action.type) {
    case 'SET_COMPLETE':
      return action.payload
    default:
      return state;
  }
}

const feedbackList = (state = [], action) => {
  switch (action.type) {
    case 'SET_FEEDBACK':
      return action.payload
    default:
      return state;
  }
}

const personIdList = (state = [], action) => {
  switch (action.type) {
    case 'SET_PERSON_ID':
      return action.payload
    default:
      return state;
  }
}

const ratingList = (state = [], action) => {
  switch (action.type) {
    case 'SET_RATING':
      return [...state, ...action.payload]
    default:
      return state;
  }
}

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  loginMode, // will have a value of 'login' or 'registration' to control which screen is shown
  user, // will have an id and username if someone is logged in 
  completeList,
  personList,
  taskList,
  todoList,
  feedbackList,
  personIdList,
  ratingList
});

export default rootReducer;
