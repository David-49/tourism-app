import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ResultSearch from './pages/ResultSearch';
import { ICoordinateGps } from './typing/pointOfInterest';
import Geocode from 'react-geocode';

const App: React.FC = () => {
  const [coordinateSelected, setCoordinateSelected] = useState<ICoordinateGps>({
    lat: 49.11326579141176,
    lng: 6.169426782134679,
  });

  const [addressSelected, setAddressSelected] = useState<string>('Metz, France');

  Geocode.setApiKey('AIzaSyCzXx7_Ty2dlamb77uQGYHsmL1omLa7YKM');

  Geocode.setLanguage('fr');

  Geocode.setRegion('fr');

  useEffect(() => {
    const { lat, lng } = coordinateSelected;
    Geocode.fromLatLng(lat.toString(), lng.toString()).then((response) => {
      const rawAddress = response.plus_code.compound_code as string;
      const formattedAddress = rawAddress.substring(rawAddress.indexOf(' ') + 1);
      setAddressSelected(formattedAddress);
    });
  }, [coordinateSelected]);

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <HomePage
            setAddressSelected={setAddressSelected}
            setCoordinateSelected={setCoordinateSelected}
          />
        </Route>
        <Route path="/results" exact>
          <ResultSearch
            coordinateSelected={coordinateSelected}
            setCoordinateSelected={setCoordinateSelected}
            setAddressSelected={setAddressSelected}
            addressSelected={addressSelected}
          />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
