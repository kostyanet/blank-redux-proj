import { failAction, fetchAction, successAction } from '../utils';

import { TAction, TActionCreator } from '../../types/store/store';
import { TTestActions } from '../enums/testEnums';


/** Test action */
export const retrieveTestData: TActionCreator = (): TAction => fetchAction(TTestActions.RETRIEVE_DATA_FETCH_START);

export const retrieveTestDataSuccess: TActionCreator =
  (data: any): TAction => successAction(TTestActions.RETRIEVE_DATA_FETCH_SUCCESS, { data });

export const retrieveTestDataError =
  ({ message }: Error): TAction => failAction(TTestActions.RETRIEVE_DATA_FETCH_ERROR, message);
