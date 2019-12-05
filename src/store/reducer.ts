import { combineReducers, Reducer } from 'redux';
import { isObjectLiteral } from '../other/utils';

import { TStore } from '../types/store/store';

const reducers: { [key: string ]: Reducer } = {};
const namespaces = [
  'testModel',
  'marketsList'
];

function reducerAtomic(namespace: string): Reducer {
  return (state={}, action): Partial<TStore> => {
    const { type, payload } = action;
    const [_namespace] = type.split('/');
    if (_namespace !== namespace) return state;

    return isObjectLiteral(payload)
      ? { ...state, ...payload }
      : state;
  };
}

namespaces.forEach((ns: string): Function => reducers[ns] = reducerAtomic(ns));
const createRootReducer = () => combineReducers(reducers);

export default createRootReducer;
