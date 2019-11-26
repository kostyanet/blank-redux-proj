export type TStore = Readonly<{
  testModel: any;
}>;

export type TBaseModel = Readonly<{
  error?: string;
  isPending: boolean;
}>;

export type TActionCreator = (dispatch: Function, getState?: Function) => void;

export type TAction = {
  type: string | any; // any == enum
  payload?: any;
}
