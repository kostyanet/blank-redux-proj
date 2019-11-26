import { combineEpics } from 'redux-observable';

import testEpics from '../epics/testEpic';

const epics = combineEpics(
  ...testEpics,
);

export default epics;
