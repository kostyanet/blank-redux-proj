import { Epic, ofType } from 'redux-observable';
import { Observable } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

import { CONFIG } from '../../other/config';
import { retrieveTestDataAsync } from '../actions/testActions';

import { TAction, TStore } from '../../types/store/store';
import { TTestActions } from '../enums/testEnums';



const testEpic: Epic<TAction, TAction, TStore> = (action$, store$, { http }) => {
  const fetchTestData = (action: TAction): Observable<any> =>
    http.get(CONFIG.ENDPOINTS.TEST).pipe(
      map(retrieveTestDataAsync.success),
    );

  return action$.pipe(
    ofType(TTestActions.RETRIEVE_DATA_FETCH_START),
    switchMap(fetchTestData),
    catchError((e: Error) => retrieveTestDataAsync.error(e) as any)
  );
};

export default [
  testEpic,
];
