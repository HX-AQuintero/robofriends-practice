import { createStore, applyMiddleware, combineReducers } from 'redux';

import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { searchRobots, requestRobots } from '../reducers/reducers';

const logger = createLogger();

const rootReducers = combineReducers({ searchRobots, requestRobots });

export const store = createStore(
  rootReducers,
  applyMiddleware(thunkMiddleware, logger)
);
