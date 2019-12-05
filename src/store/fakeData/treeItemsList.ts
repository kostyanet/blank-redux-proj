import { TTreeItem, TTreeItemType } from '../../types/treeItem';

export const treeItemsList: TTreeItem[] = [
  {
    label: 'Tennis',
    name: 'string',
    type: TTreeItemType.SPORT_TYPE,
    id: 123,
    parentId: null,
    isSelected: false,
    children: [
      {
        label: 'Premier League',
        name: 'string',
        type: TTreeItemType.COMPETITION,
        id: 234,
        parentId: null,
        isSelected: false,
        children: [],
      },{
        label: 'Spanish Cup',
        name: 'string',
        type: TTreeItemType.COMPETITION,
        id: 237,
        parentId: null,
        isSelected: false,
        children: [],
      }
    ]
  }, {
    label: 'Football',
    name: 'string',
    type: TTreeItemType.SPORT_TYPE,
    id: 1234,
    parentId: null,
    isSelected: false,
    children: [
      {
        label: 'Premier League',
        name: 'string',
        type: TTreeItemType.COMPETITION,
        id: 234,
        parentId: null,
        isSelected: false,
        children: [
          {
            label: 'Manc Utd vs Arsenal: 2020-01-21 17:30',
            name: 'string',
            type: TTreeItemType.EVENT,
            id: 345,
            parentId: null,
            isSelected: false,
            children: null,
          }, {
            label: 'Sheffield Wednesday vs Arsenal: 2020-03-11 11:00',
            name: 'string',
            type: TTreeItemType.EVENT,
            id: 334,
            parentId: null,
            isSelected: false,
            children: [],
          },
        ],
      },{
        label: 'Spanish Cup',
        name: 'string',
        type: TTreeItemType.COMPETITION,
        id: 237,
        parentId: null,
        isSelected: false,
        children: [
          {
            label: 'Manc Utd vs Arsenal: 2020-01-21 17:30',
            name: 'string',
            type: TTreeItemType.EVENT,
            id: 345,
            parentId: null,
            isSelected: false,
            children: null,
          }, {
            label: 'Sheffield Wednesday vs Arsenal: 2020-03-11 11:00',
            name: 'string',
            type: TTreeItemType.EVENT,
            id: 334,
            parentId: null,
            isSelected: false,
            children: [],
          },
        ],
      },
    ],
  },{
    label: 'Volleyball',
    name: 'string',
    type: TTreeItemType.SPORT_TYPE,
    id: 124,
    parentId: null,
    isSelected: false,
    children: [
      {
        label: 'Premier League',
        name: 'string',
        type: TTreeItemType.COMPETITION,
        id: 234,
        parentId: null,
        isSelected: false,
        children: [],
      },{
        label: 'Spanish Cup',
        name: 'string',
        type: TTreeItemType.COMPETITION,
        id: 237,
        parentId: null,
        isSelected: false,
        children: [
          {
            label: 'Manc Utd vs Arsenal: 2020-01-21 17:30',
            name: 'string',
            type: TTreeItemType.EVENT,
            id: 345,
            parentId: null,
            isSelected: false,
            children: null,
          }, {
            label: 'Sheffield Wednesday vs Arsenal: 2020-03-11 11:00',
            name: 'string',
            type: TTreeItemType.EVENT,
            id: 334,
            parentId: null,
            isSelected: false,
            children: [],
          },
        ],
      }
    ],
  },{
    label: 'Hockey',
    name: 'string',
    type: TTreeItemType.SPORT_TYPE,
    id: 125,
    parentId: null,
    isSelected: false,
    children: null,
  },
];
