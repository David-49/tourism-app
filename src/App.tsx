import { createStyles, makeStyles } from '@material-ui/core';
import React from 'react';

import { Map } from './modules/map/Map/Map.component';
import SearchPlace from './modules/map/SearchPlace';

const App = () => {
  const classes = useStyles();

  // query list of POI based on string
  // https://maps.googleapis.com/maps/api/place/textsearch/json?query=todo+in+Angers&key=AIzaSyCzXx7_Ty2dlamb77uQGYHsmL1omLa7YKM

  // query list of POI based on location(lat/lng)
  //https://maps.googleapis.com/maps/api/place/textsearch/json?query=todo+in+&location=lat,lng&radius=1500&key=AIzaSyCzXx7_Ty2dlamb77uQGYHsmL1omLa7YKM

  //https://developers.google.com/maps/documentation/places/web-service/autocomplete#location_restrict

  //https://rajatamil.medium.com/how-to-get-data-from-google-maps-places-api-

  //https://developers.google.com/maps/documentation/urls/get-started

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
