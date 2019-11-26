import { TStore } from '../types/store/store';

const basicModel = {
  error: null,
  isPending: false
};

// The global initial state
export const initialGlobalState: TStore = {
  testModel: {
    ...basicModel,
    data: null
  }
};
