import { applyMiddleware, compose, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { createLogger } from 'redux-logger';

import createRootReducer from './reducer';
import epics from './epics';
import http from '../other/services/http';
import { initialGlobalState } from './initialGlobalState';

import { TAction, TStore } from '../types/store/store';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
  }
}

const composeEnhancers = (
  window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) || compose;

const epicOptions = {
  dependencies: { http }
};
const epicMiddleware = createEpicMiddleware<TAction, TAction, TStore>(epicOptions);
const logger = createLogger({ collapsed: true });

const enhancer = composeEnhancers(
  applyMiddleware(
    epicMiddleware,
    logger
  ),
);

const reducer = createRootReducer();
const store = createStore(
  reducer,
  initialGlobalState,
  enhancer
);

epicMiddleware.run(epics as any);
export default store;
