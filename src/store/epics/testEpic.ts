import { Epic, ofType } from 'redux-observable';
import { from, Observable, of } from 'rxjs';
import { retrieveTestDataError, retrieveTestDataSuccess } from '../actions/testActions';
import { switchMap, filter, map, catchError } from 'rxjs/operators';

import { TAction, TStore } from '../../types/store/store';
import { TTestActions } from '../enums/testEnums';



const testEpic: Epic<TAction, TAction, TStore> = (action$, store$, { http }) => {
  const fetchTestData = (action: TAction): Observable<any> => http.get('https://api.github.com/users?per_page=5')
    .pipe(
      map(retrieveTestDataSuccess as any),
      catchError(retrieveTestDataError as any)
    );

  return action$.pipe(
    ofType(TTestActions.RETRIEVE_DATA_FETCH_START),
    switchMap(fetchTestData)
  );
};

export default [
  testEpic,
];
