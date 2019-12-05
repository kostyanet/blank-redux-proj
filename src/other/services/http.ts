import { ajax, AjaxResponse } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { CONFIG } from '../config';
import { isObjectLiteral, isProdMode } from '../utils';
// import showErrorNotification from '../../components/Error/showErrorNotification';
// import showWarningNotification from '../../components/Error/showWarningNotification';
import {
  THttpRequestConfig,
  THttpResponseError,
  THttpService,
  TSessionData
} from './types';
import { Observable } from 'rxjs';

const DEFAULT_OPTIONS = {
  withCredentials: true
};


export class Http {

  static getOptions(options: Partial<THttpRequestConfig>): Partial<THttpRequestConfig> {
    return { ...DEFAULT_OPTIONS, ...options as any };
  }

  static getToken() {
    // const sessionData: TSessionData = AuthenticationClient.getSessionData();
    // return isProdMode() ? sessionData.sessionId : CONFIG.DEV_AUTH_TOKEN;
  }

  private readonly baseURL: string;
  private readonly service: THttpService;

  constructor(ajax: THttpService) {
    this.baseURL = isProdMode() ? CONFIG.BASE_URL_PROD : CONFIG.BASE_URL_DEV;
    this.service = ajax;
  }

  private handleResponse = (result: AjaxResponse): Observable<Error> | Partial<AjaxResponse> => {
    return result.response;
  };

  private handleError = (error: THttpResponseError): Observable<THttpResponseError> => {
    const {
      message,
      request: { method, url },
      response,
      status,
      xhr: { statusText }
    } = error;

    const msg = `${method.toUpperCase()} ${url} -- ${status}: ${statusText} -- ${message}`;
    const errorData = {
      message: response.message || message,
      method,
      status,
      statusText,
      url
    };

    // showErrorNotification(config, response);
    // let msg;
    //
    // if (!config) {
    //   msg = `Network error -- ${message}`;
    // } else {
    //   const { method, url } = config;
    //   const { status, statusText } = response || {};
    //   msg = `${method.toUpperCase()} ${url} -- ${status}: ${statusText} -- ${message}`;
    // }

    window.console.error(msg);
    return throwError(error);
  };

  private send(body: any, options: Partial<THttpRequestConfig>): Observable<any> {
    const { headers, method, url } = options;
    const path: string = url.startsWith('http')
      ? url
      : `${this.baseURL}${url}`;

    const config = {
      url: path,
      method: method || 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        ...headers || {}
      },
      body: body ? JSON.stringify(body) : null
    };
    return this.service(config).pipe(
      map(this.handleResponse),
      catchError(this.handleError)
    );
  }

  get(url: string): Observable<any> {
    return this.send(null, Http.getOptions({ url }));
  }

  post(url: string, payload: [] | {}): Observable<any> {
    const options = {
      method: 'POST',
      url,
    } as any;
    return this.send(payload, Http.getOptions(options));
  }

  delete(url: string, payload: [] | {}): Observable<any> {
    const options = {
      method: 'DELETE',
      url,
    } as any;
    return this.send(payload, Http.getOptions(options));
  }

}


const http = new Http(ajax);
export default http;
