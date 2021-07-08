import React, { FC, useEffect, useState } from 'react';

import TypeRestaurant from '../TypeRestaurant';
import TypeEntertainment from '../TypeEntertainment';
import TypeHiking from '../TypeHiking';
import TypeLodging from '../TypeLodging';
import { citySelectedMocks } from '../../../mocks/pointsOfInterest/pointsOfInterest';
import { createStyles, makeStyles } from '@material-ui/core';
import { ICitySelected } from '../../../typing/pointOfInterest';

export interface IProps {
  addressSelected: string;
  filterSelected: string;
}

export const PointsOfInterest: FC<IProps> = (props) => {
  const classes = useStyles();
  const { filterSelected, addressSelected } = props;
  const [citySelected, setCitySelected] = useState<ICitySelected[]>([]);

  useEffect(() => {
    const filteredCity = citySelectedMocks.filter((city) => city.vicinity === addressSelected);
    setCitySelected(filteredCity);
  }, [addressSelected]);

  return (
    <div className="my-20">
      {!!citySelected[0] && (
        <div className="w-full h-96 relative">
          <div className="absolute inset-0 z-10 bg-black bg-opacity-20 flex justify-center items-center">
            <p className={`${classes.heavitasFont} text-4xl text-white border-b-4 border-white`}>
              {citySelected[0].vicinity}
            </p>
          </div>
          <img
            className="w-full h-full object-cover object-center"
            src={process.env.PUBLIC_URL + citySelected[0].url_image}
            alt=""
          />
        </div>
      )}
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

      {filterSelected === 'Hôtels / Campings' && (
        <div className="mt-20">
          <TypeLodging addressSelected={addressSelected} />
        </div>
      )}
    </div>
  );
};

const useStyles = makeStyles((theme) =>
  createStyles({
    card: {
      borderRadius: theme.spacing(3),
      boxShadow: '4px 5px 14px #00000029',
    },
    heavitasFont: {
      fontFamily: 'Heavitas',
    },
    chip: {
      boxShadow: '-4px 5px 15px #00000029',
      borderRadius: theme.spacing(3),
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
  })
);
