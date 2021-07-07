import React, { FC } from 'react';

import TypeRestaurant from '../TypeRestaurant';
import TypeEntertainment from '../TypeEntertainment';
import TypeHiking from '../TypeHiking';
import TypeLodging from '../TypeLodging';

export interface IProps {
  addressSelected: string;
  filterSelected: string;
}

export const PointsOfInterest: FC<IProps> = (props) => {
  const { filterSelected, addressSelected } = props;

  return (
    <div className="my-20">
      {filterSelected === 'Tout' && (
        <>
          <div className="mt-32">
            <TypeRestaurant addressSelected={addressSelected} />
          </div>
          <div className="mt-32">
            <TypeEntertainment addressSelected={addressSelected} />
          </div>
          <div className="mt-32">
            <TypeHiking addressSelected={addressSelected} />
          </div>
          <div className="mt-32">
            <TypeLodging addressSelected={addressSelected} />
          </div>
        </>
      )}

      {filterSelected === 'Restaurant' && (
        <div className="mt-20">
          <TypeRestaurant addressSelected={addressSelected} />
        </div>
      )}

      {filterSelected === 'Divertissement' && (
        <div className="mt-20">
          <TypeEntertainment addressSelected={addressSelected} />
        </div>
      )}

      {filterSelected === 'Randonnées' && (
        <div className="mt-20">
          <TypeHiking addressSelected={addressSelected} />
        </div>
      )}

      {filterSelected === 'Randonnées' && (
        <div className="mt-20">
          <TypeLodging addressSelected={addressSelected} />
        </div>
      )}
    </div>
  );
};
