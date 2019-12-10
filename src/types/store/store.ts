import { Epic } from 'redux-observable';
import { Http } from '../../other/services/http';
import { TMarketsListModel } from './marketsList';

export type TStore = Readonly<{
  testModel: any;
  marketsList: TMarketsListModel;
}>;

export type TBaseModel = Readonly<{
  error?: string;
  isPending: boolean;
}>;

export type TActionCreator = (dispatch: Function, getState?: Function) => void;

export type TAction<T extends string> = {
  type: T;
  payload?: any;
  isPending?: boolean;
  error?: string;
}

export type TEpicDeps = {
  http: Http;
};
export type TEpic<T extends string> = Epic<TAction<T>, TAction<T>, TStore, TEpicDeps>;
