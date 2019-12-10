import { message } from 'antd';
import store from './store';
import { Observable, Observer, of, Subject } from 'rxjs';
import { TAction, TEpic, TEpicDeps, TStore } from '../types/store/store';
import { ActionsObservable, StateObservable } from 'redux-observable';
import { toArray } from 'rxjs/operators';


export const fetchAction = (type, data={}) => ({
  type,
  payload: {
    isPending: true,
    error: null,
    ...data
  }
});
export const successAction = (type, data={}) => ({
  type,
  payload: {
    isPending: false,
    error: null,
    ...data
  }
});
export const failAction = (type, error=void 0) => ({
  type,
  payload: {
    isPending: false,
    error
  }
});

/** Returns a bunch of action creators used in async cases. */
export function createAsyncActions<A extends string>(start: A, ok: A, fail: A):
  { [key: string]: (param: any) => TAction<A> | Observable<TAction<A>> } {
  return {
    request: (payload: any) => fetchAction(start, payload),
    success: (payload: any) => successAction(ok, payload),
    error: ({ message }: Error) => of(failAction(fail, message)),
    _testError: ({ message }: Error) => failAction(fail, message)
  };
}

export function areEqual(x, y) {
  return (x && JSON.stringify(x)) === (y && JSON.stringify(y));
}

export function deepClone(data) {
  if (!data) return data;
  return JSON.parse(JSON.stringify(data));
}

export const handleError = (type) => (error) => {
  const msg = error.message || 'Unexpected error!';
  window.console.error(error);
  store.dispatch(failAction(type, msg));
};

export function reportError(error) {
  const msg = error.message || 'Unexpected error!';
  message.error(msg, 10);
  throw Error(msg);
}


// TEST UTILS
/**
 * Test epic runner.
 */
export function er(
  epic: TEpic<any>,
  initialState: TStore,
  action: TAction<any>,
  dependencies: TEpicDeps
): Function {
  return function _runner(
    callback: Observer<any>,
    state: TStore = {} as any
  ): void {
    const stateSubject = new Subject();
    const fakeStore = { ...initialState, ...state };
    const state$: any = new StateObservable(stateSubject, fakeStore);
    const action$ = ActionsObservable.of(action);

    epic(action$, state$, dependencies).pipe(
      toArray()
    ).subscribe(callback);
  }
}


// export function mockHttpGet(response) {
//   http.get = jest.fn(() => Promise.resolve({
//     status: 200,
//     ok: true,
//     data: response
//   }));
// }
//
// export function mockHttpPost(body, response) {
//   http.post = jest.fn(() => Promise.resolve({
//     body,
//     status: 200,
//     ok: true,
//     data: response
//   }));
// }
