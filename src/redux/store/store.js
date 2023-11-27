import { createStore, applyMiddleware, combineReducers } from 'redux';

import thunkMiddleware from 'redux-thunk';
import { searchRobots, requestRobots } from '../reducers/reducers';

const rootReducers = combineReducers({ searchRobots, requestRobots });

export const store = createStore(
  rootReducers,
  applyMiddleware(thunkMiddleware)
);
