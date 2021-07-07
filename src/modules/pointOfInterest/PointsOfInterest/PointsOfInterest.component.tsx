import React, { FC } from 'react';

import { createStyles, makeStyles } from '@material-ui/core';
import { ICoordinateGps } from '../../../typing/pointOfInterest';
import TypeRestaurant from '../TypeRestaurant';
import TypeEntertainment from '../TypeEntertainment';
import TypeHiking from '../TypeHiking';
import TypeLodging from '../TypeLodging';

export interface IProps {
  coordinateSelected: ICoordinateGps;
  filterSelected: string;
}

export const PointsOfInterest: FC<IProps> = (props) => {
  const { coordinateSelected, filterSelected } = props;

  return (
    <div className="my-20">
      {filterSelected === 'Tout' && (
        <>
          <div className="mt-32">
            <TypeRestaurant />
          </div>
          <div className="mt-32">
            <TypeEntertainment />
          </div>
          <div className="mt-32">
            <TypeHiking />
          </div>
          <div className="mt-32">
            <TypeLodging />
          </div>
        </>
      )}

      {filterSelected === 'Restaurant' && (
        <div className="mt-20">
          <TypeRestaurant />
        </div>
      )}

      {filterSelected === 'Divertissement' && (
        <div className="mt-20">
          <TypeEntertainment />
        </div>
      )}

      {filterSelected === 'Randonnées' && (
        <div className="mt-20">
          <TypeHiking />
        </div>
      )}

      {filterSelected === 'Randonnées' && (
        <div className="mt-20">
          <TypeLodging />
        </div>
      )}
    </div>
  );
};
