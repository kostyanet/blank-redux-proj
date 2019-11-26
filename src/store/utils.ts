import { message } from 'antd';
import store from './store';
import http from '../other/services/http';


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
