export type TTreeItem = {
  label: string;
  name: string;
  type: TTreeItemType;
  id: number;
  parentId?: number;
  isSelected: boolean;
  children: TTreeItem[];
};

export enum TTreeItemType {
  SPORT_TYPE = 'SPORT_TYPE',
  COUNTRY = 'COUNTRY',
  MEETING = 'MEETING',
  RACE = 'RACE',
  COMPETITION = 'COMPETITION',
  EVENT = 'EVENT',
  MARKET = 'MARKET',
}
