import React, { FC, useEffect } from 'react';

import { createStyles, makeStyles } from '@material-ui/core';
import axios from 'axios';
import { ICoordinateGps } from '../../../typing/pointOfInterest';

export interface IProps {
  coordinateSelected: ICoordinateGps;
}

export const PointsOfInterest: FC<IProps> = (props) => {
  const { coordinateSelected } = props;
  const classes = useStyles();

  // https://maps.googleapis.com/maps/api/place/textsearch/json?query=todo+in+&location=49.1193089,6.175715599999999&radius=15000&key=AIzaSyCzXx7_Ty2dlamb77uQGYHsmL1omLa7YKM

  // https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=49.1193089,6.175715599999999&radius=1500t&keyword=cruise&key=AIzaSyCzXx7_Ty2dlamb77uQGYHsmL1omLa7YKM

  // useEffect(() => {
  //   axios
  //     .get(' https://maps.googleapis.com/maps/api/place/textsearch/json', {
  //       params: {
  //         query: `todo+in+`,
  //         key: 'AIzaSyCzXx7_Ty2dlamb77uQGYHsmL1omLa7YKM',
  //         location: `${coordinateSelected.lat},${coordinateSelected.lng}`,
  //         radius: '15000',
  //         strictbounds: true,
  //       },
  //     })
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, [coordinateSelected]);

  // const service = new google.maps.places.PlacesService(coordinateSelected);

  return (
    <>
      <></>
    </>
  );
};

const useStyles = makeStyles((theme) => createStyles({}));
