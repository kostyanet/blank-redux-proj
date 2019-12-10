import { createAsyncActions } from '../utils';
import { TAction } from '../../types/store/store';
import { TMarketsListActions } from '../enums/marketsListActions';
import { TMarketsListRequestParams } from '../../types/store/marketsList';

export const retrieveMarketsList = createAsyncActions<TMarketsListActions>(
  TMarketsListActions.RETRIEVE_LIST_START,
  TMarketsListActions.RETRIEVE_LIST_SUCCESS,
  TMarketsListActions.RETRIEVE_LIST_ERROR,
);

export const setRequestParams = (requestParams: TMarketsListRequestParams): TAction<TMarketsListActions> => ({
  type: TMarketsListActions.SET_REQUEST_PARAMS,
  payload: { requestParams }
});
