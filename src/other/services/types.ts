export type TSessionData = {
  userId: number;
  accountId: number;
  sessionId: string;
  username: string;
};

export type THttpResponseError = {
  config: THttpRequestConfig;
  message: string;
  request: THttpRequestConfig;
  response: THttpResponse;
  status: number;
  xhr: XMLHttpRequest;
};

export type THttpRequestConfig = {
  crossDomain: boolean;
  method: 'GET' | 'PUT' | 'POST' | 'DELETE';
  headers: {};
  responseType: 'json';
  url: string;
  withCredentials: boolean;
};

export type THttpResponse = {
  config: THttpRequestConfig;
  data: [] | {};
  message: string;
};

export type THttpService = Function & {
  getJSON: Function;
};
