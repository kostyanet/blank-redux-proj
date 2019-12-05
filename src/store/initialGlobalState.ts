import { convertMsToISOMidnightAsUTC } from '../other/utils';
import { TWO_DAYS_MS } from '../other/constants';

import { TStore } from '../types/store/store';

const basicModel = {
  error: null,
  isPending: false
};

export const marketsListInitialState = {
  ...basicModel,
  requestParams: {
    fromDateTime: convertMsToISOMidnightAsUTC(new Date()),
    toDateTime: convertMsToISOMidnightAsUTC(new Date(Date.now() + TWO_DAYS_MS))
  },
  list: null,
};

// The global initial state
export const initialGlobalState: TStore = {
  testModel: {
    ...basicModel,
    data: null
  },
  marketsList: marketsListInitialState
};
