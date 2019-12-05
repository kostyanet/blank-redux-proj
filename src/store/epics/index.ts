import { combineEpics } from 'redux-observable';

import marketsListEpics from './marketsListEpics';
import testEpics from '../epics/testEpic';

const epics = combineEpics(
  ...marketsListEpics,
  ...testEpics,
);

export default epics;
