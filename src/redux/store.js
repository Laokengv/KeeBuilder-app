import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import rootReducer from './reducers/_root.reducer'; // imports ./redux/reducers/index.js
import rootSaga from './sagas/_root.saga'; // imports ./redux/sagas/index.js

const cases = (state = [], action) => {
  if (action.type === 'SET_CASES') {
      return action.payload;
  }

  return state;
}

const keycaps = (state = [], action) => {
  if (action.type === 'SET_KEYCAPS') {
      return action.payload;
  }

  return state;
}

const stabilizers = (state = [], action) => {
  if (action.type === 'SET_STABILIZERS') {
      return action.payload;
  }

  return state;
}

const switches = (state = [], action) => {
  if (action.type === 'SET_SWITCHES') {
      return action.payload;
  }

  return state;
}


const sagaMiddleware = createSagaMiddleware();

// this line creates an array of all of redux middleware you want to use
// we don't want a whole ton of console logs in our production code
// logger will only be added to your project if your in development mode
const middlewareList = process.env.NODE_ENV === 'development' ?
  [sagaMiddleware, logger] :
  [sagaMiddleware];

const store = createStore(
  combineReducers({
  // tells the saga middleware to use the rootReducer
  // rootSaga contains all of our other reducers
  cases,
  keycaps,
  stabilizers,
  switches,
  rootReducer,
  }),
  // adds all middleware to our project including saga and logger
  applyMiddleware(...middlewareList),
);

// tells the saga middleware to use the rootSaga
// rootSaga contains all of our other sagas
sagaMiddleware.run(rootSaga);

export default store;