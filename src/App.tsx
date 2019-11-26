import React from 'react';
import './App.scss';
import RouteSwitch from './components/RouteSwitch';

const App: React.FC = () => (
  <div className="App">
    <header className="App-header">
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
    </header>
    <RouteSwitch />
  </div>
);

export default App;
