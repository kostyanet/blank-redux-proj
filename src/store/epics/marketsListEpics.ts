import { Epic, ofType } from 'redux-observable';
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

import { CONFIG } from '../../other/config';
import { retrieveMarketsList } from '../actions/marketsListActions';
import { treeItemsList } from '../fakeData/treeItemsList';

import { TAction, TStore } from '../../types/store/store';
import { TMarketsListActions } from '../enums/marketsListActions';



const fetchListEpic: Epic<TAction, TAction, TStore> = (action$, store$, { http }) => {
  const fetchList = (action: TAction): Observable<any> =>
    // http.get(CONFIG.ENDPOINTS.TEST)
    of(treeItemsList)
      .pipe(
      map((list) => retrieveMarketsList.success({ list })),
    );

  return action$.pipe(
    ofType(TMarketsListActions.RETRIEVE_LIST_START),
    switchMap(fetchList),
    catchError((e: Error) => retrieveMarketsList.error(e) as any)
  );
};

export default [
  fetchListEpic,
];
