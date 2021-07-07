import { createStyles, makeStyles } from '@material-ui/core';
import React, { FC, useState } from 'react';

import SearchPlace from '../../modules/map/SearchPlace';
import PointsOfInterest from '../../modules/pointOfInterest/PointsOfInterest';
import { ICoordinateGps } from '../../typing/pointOfInterest';
import GoogleMaps from '../../modules/map/GoogleMaps/GoogleMaps.component';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrosshairs } from '@fortawesome/free-solid-svg-icons';

export interface IProps {
  setCoordinateSelected: (value: ICoordinateGps) => void;
  coordinateSelected: ICoordinateGps;
}

export const ResultSearch: FC<IProps> = (props) => {
  const { setCoordinateSelected, coordinateSelected } = props;
  const classes = useStyles();

  const [displayListActive, setDisplayListActive] = useState<boolean>(false);
  const [displayMapActive, setDisplayMapActive] = useState<boolean>(true);
  const [filterSelected, setFilterSelected] = useState<string>('Tout');

  const handleDisplayMap = () => {
    setDisplayListActive(false);
    setDisplayMapActive(true);
  };

  const handleDisplayList = () => {
    setDisplayListActive(true);
    setDisplayMapActive(false);
  };

  const handleGetLocation = () => {
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
  };

  const listType = ['Tout', 'Restaurant', 'Divertissement', 'Randonnées', 'Hôtels / Campings'];

  return (
    <div>
      <div className="w-screen flex justify-stretch overflow-hidden min-h-screen">
        <div className="flex-grow flex flex-col items-center pt-10 bg-gray-100 sticky">
          <p className={`${classes.heavitasFont}`}>
            Choisissez le <span className="text-blue-default">mode</span> d'affichage
          </p>
          <div className={`flex items-center ${classes.heavitasFont} mt-8`}>
            <button
              className={`py-2 px-4 mr-3 ${
                !!displayListActive ? classes.gradientBackgroundButtonFilter : ''
              }`}
              onClick={handleDisplayList}
            >
              Liste
            </button>
            <span className="h-full bg-black w-1"></span>
            <button
              className={`py-2 px-4 ml-4 ${
                !!displayMapActive ? classes.gradientBackgroundButtonFilter : ''
              }`}
              onClick={handleDisplayMap}
            >
              Carte
            </button>
          </div>
          <p className={`grif grid-cols-1 ${classes.heavitasFont} mt-20 mb-8`}>
            Que recherchez-vous ?
          </p>
          <div className={`${classes.heavitasFont} flex flex-col items-center space-y-6`}>
            {listType.map((type) => (
              <p
                onClick={() => setFilterSelected(type)}
                className={` w-full bg-white rounded-3xl text-center py-2 px-4 hover:bg-blue-default hover:text-white cursor-pointer ${
                  filterSelected === type ? 'bg-blue-default text-white' : ''
                }`}
              >
                {type}
              </p>
            ))}
          </div>
        </div>
        <div className="flex-grow w-8/12 overflow-hidden">
          <Header />
          <div className="my-8 w-11/12 m-auto flex items-center">
            <div className="w-11/12">
              <SearchPlace setCoordinateSelected={setCoordinateSelected} />
            </div>
            <button
              onClick={handleGetLocation}
              title="Afficher votre position"
              className={` ml-3 p-3  ${classes.gradientBackgroundButtonPosition}`}
            >
              <FontAwesomeIcon icon={faCrosshairs} />
            </button>
          </div>
          {!!displayMapActive ? (
            <div className="h-full">
              <GoogleMaps coordinateGps={coordinateSelected} />
            </div>
          ) : (
            <PointsOfInterest
              filterSelected={filterSelected}
              coordinateSelected={coordinateSelected}
            />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

const useStyles = makeStyles((theme) =>
  createStyles({
    heavitasFont: {
      fontFamily: 'Heavitas',
    },
    gradientBackgroundButtonFilter: {
      background:
        'transparent linear-gradient(90deg, #F6A020 0%, #F9DD04 100%) 0% 0% no-repeat padding-box',
      boxShadow: '-4px 5px 15px #00000029',
      borderRadius: theme.spacing(3),
    },
    gradientBackgroundButtonPosition: {
      background:
        'transparent linear-gradient(90deg, #F6A020 0%, #F9DD04 100%) 0% 0% no-repeat padding-box',
      boxShadow: '-4px 5px 15px #00000029',
      borderRadius: theme.spacing(1),
    },
  })
);
