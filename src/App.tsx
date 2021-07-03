import { createStyles, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

import { Map } from './modules/map/Map/Map.component';
import SearchPlace from './modules/map/SearchPlace';
import PointsOfInterest from './modules/pointOfInterest/PointsOfInterest';
import { ICoordinateGps } from './typing/pointOfInterest';
import { GoogleMaps } from './modules/map/GoogleMaps/GoogleMaps.component';

const App = () => {
  const classes = useStyles();

  const [coordinateSelected, setCoordinateSelected] = useState<ICoordinateGps>({
    lat: 49.11326579141176,
    lng: 6.169426782134679,
  });

  // query list of POI based on string
  // https://maps.googleapis.com/maps/api/place/textsearch/json?query=todo+in+Angers&key=AIzaSyCzXx7_Ty2dlamb77uQGYHsmL1omLa7YKM

  // query list of POI based on location(lat/lng)
  //https://maps.googleapis.com/maps/api/place/textsearch/json?query=todo+in+&location=lat,lng&radius=1500&key=AIzaSyCzXx7_Ty2dlamb77uQGYHsmL1omLa7YKM

  //https://developers.google.com/maps/documentation/places/web-service/autocomplete#location_restrict

  //https://rajatamil.medium.com/how-to-get-data-from-google-maps-places-api-

  //https://developers.google.com/maps/documentation/urls/get-started

  useEffect(() => {
    const success = (pos: any) => {
      const crd = pos.coords;
      const coordinateFormatted = {
        lat: crd.latitude,
        lng: crd.longitude,
      };

      setCoordinateSelected(coordinateFormatted);
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
  }, []);

  return (
    <>
      <SearchPlace setCoordinateSelected={setCoordinateSelected} />
      <PointsOfInterest coordinateSelected={coordinateSelected} />
      <div className={classes.containerGoogleMap}>
        <GoogleMaps coordinateGps={coordinateSelected} />
      </div>
      <div className={classes.containerMap}>
        <Map coordinateGps={coordinateSelected} />
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
    containerGoogleMap: {
      float: 'right',
    },
  })
);
