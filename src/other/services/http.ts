import { ajax, AjaxResponse } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { CONFIG } from '../config';
import { isObjectLiteral, isProdMode } from '../utils';
// import showErrorNotification from '../../components/Error/showErrorNotification';
// import showWarningNotification from '../../components/Error/showWarningNotification';
import {
  THttpRequestConfig,
  THttpResponse,
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
    const { request, response, status, xhr/*: XMLHttpRequest*/ } = result;
    debugger
    // if (isObjectLiteral(data) && (data.faultcode || data.faultstring)) {
    //   const { detail, faultcode, faultstring } = data;
    //   const errorResponse = {
    //     status: `${faultcode}, ${faultstring}`,
    //     statusText: detail.message
    //   };
    //   showErrorNotification(config, errorResponse);
    //   return Promise.reject(new Error('Error server response!'));
    // }

    // if (isObjectLiteral(data) && data.status && data.status.toUpperCase() !== 'OK') {
    //   const warnings = { ...data };
    //   delete warnings.status;
    //   showWarningNotification(config, warnings);
    //   return Promise.reject(new Error('Warning server response!'));
    // }
    return response;
  };

  private handleError = (error: THttpResponseError): Observable<THttpResponseError> => {
    const { config, message, response } = error;
    debugger

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

    // window.console.error(msg);
    return of(error);
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
