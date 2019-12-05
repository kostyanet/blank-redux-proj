import { createAsyncActions } from '../utils';
import { TTestActions } from '../enums/testEnums';

export const retrieveTestDataAsync = createAsyncActions(
  TTestActions.RETRIEVE_DATA_FETCH_START,
  TTestActions.RETRIEVE_DATA_FETCH_SUCCESS,
  TTestActions.RETRIEVE_DATA_FETCH_ERROR
);
