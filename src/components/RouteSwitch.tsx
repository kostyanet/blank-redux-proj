import React from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';

import { CONFIG } from '../other/config';
import HomePage from '../pages/Home/HomePage';

const {
  ROUTES: {
    HOME
  },
} = CONFIG;

const RouteSwitch: React.FC = () => (
  <HashRouter>
    <Switch>
      <Route exact path={HOME} component={HomePage} />
      {/*<Route exact path={`${FACET}/:id`} component={SchedulePageConnected} />*/}

      <Redirect to={HOME} />
    </Switch>
  </HashRouter>
);

export default RouteSwitch;
