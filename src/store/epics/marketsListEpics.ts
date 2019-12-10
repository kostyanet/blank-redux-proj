import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { Epic, ofType } from 'redux-observable';
import { Observable } from 'rxjs';

import { CONFIG } from '../../other/config';
import { retrieveMarketsList } from '../actions/marketsListActions';

import { TEpic, TStore } from '../../types/store/store';
import { TMarketsListActions } from '../enums/marketsListActions';
import { TMarketsListRequestParams } from '../../types/store/marketsList';
import { TTreeItem } from '../../types/treeItem';


/**
 * Returns url string with respect to the given parameters.
 */
export function buildQuery(requestParams: TMarketsListRequestParams): string {
  const { fromDateTime, toDateTime } = requestParams;
  return `${CONFIG.ENDPOINTS.MARKETS_LIST}?fromDateTime=${fromDateTime}&toDateTime=${toDateTime}`;
}

/**
 * Retrieves a list of markets, candidates to auto clean-up.
 */
export const fetchListEpic: TEpic<TMarketsListActions> = (action$, state$, { http }) => {
  const fetchList = ([, store]): Observable<any> => {
    const { marketsList: { requestParams } }: TStore = store;

    return http.get(
      buildQuery(requestParams)
    ).pipe(
      map((list: TTreeItem) => retrieveMarketsList.success({ list }))
    );
  };

  return action$.pipe(
    ofType(TMarketsListActions.RETRIEVE_LIST_START),
    withLatestFrom(state$),
    switchMap(fetchList),
    catchError((e: Error) => retrieveMarketsList.error(e) as any)
  );
};

export default [
  fetchListEpic,
];
