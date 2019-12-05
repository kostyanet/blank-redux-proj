import { TBaseModel } from './store';

export type TMarketsListModel = TBaseModel & Readonly<{
  list: any[];
  requestParams: TMarketsListRequestParams;
}>;

export type TMarketsListRequestParams = {
  fromDateTime: string;
  toDateTime: string;
};
