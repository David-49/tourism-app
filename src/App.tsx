import { createStyles, makeStyles } from '@material-ui/core';
import React from 'react';

import { Map } from './modules/map/Map/Map.component';
import SearchPlace from './modules/map/SearchPlace';

const App = () => {
  const classes = useStyles();

  const success = (pos: any) => {
    const crd = pos.coords;

    console.log('Votre position actuelle est :');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude : ${crd.longitude}`);
    console.log(`La précision est de ${crd.accuracy} mètres.`);
  };

  const error = (err: any) => {
    console.warn(`ERREUR (${err.code}): ${err.message}`);
  };

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  navigator.geolocation.getCurrentPosition(success, error, options);
  return (
    <>
      <SearchPlace />
      <div className={classes.containerMap}>
        <Map />
      </div>
    </>
  );
};

export default App;

const useStyles = makeStyles((theme) =>
  createStyles({
    containerMap: {
      margin: 'auto',
      padding: theme.spacing(6),
      width: '60%',
      height: '60vh',
    },
  })
);
