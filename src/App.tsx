import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ResultSearch from './pages/ResultSearch';
import { ICoordinateGps } from './typing/pointOfInterest';

const App: React.FC = () => {
  const [coordinateSelected, setCoordinateSelected] = useState<ICoordinateGps>({
    lat: 49.11326579141176,
    lng: 6.169426782134679,
  });
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <HomePage setCoordinateSelected={setCoordinateSelected} />
        </Route>
        <Route path="/results" exact>
          <ResultSearch
            coordinateSelected={coordinateSelected}
            setCoordinateSelected={setCoordinateSelected}
          />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
