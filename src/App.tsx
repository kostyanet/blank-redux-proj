import React, { ReactElement } from 'react';
import './App.scss';
import RouteSwitch from './components/RouteSwitch';

const App: React.FC = (): ReactElement => (
  <div className="App">
    <RouteSwitch />
  </div>
);

export default App;
