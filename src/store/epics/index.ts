import { combineEpics } from 'redux-observable';

import marketsListEpics from './marketsListEpics';
import testEpics from '../epics/testEpic';

const epics = combineEpics(
  ...(marketsListEpics || []), // test runner workaround
  ...testEpics,
);

export default epics;
