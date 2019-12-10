import { TBaseModel } from './store';
import { TTreeItem } from '../treeItem';

export type TMarketsListModel = TBaseModel & Readonly<{
  list: TTreeItem[];
  requestParams: TMarketsListRequestParams;
}>;

export type TMarketsListRequestParams = {
  fromDateTime: string;
  toDateTime: string;
};
