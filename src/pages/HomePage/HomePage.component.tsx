import React, { FC } from 'react';

import { createStyles, makeStyles } from '@material-ui/core';
import accueilImage from './../../assets/images/accueilImage.png';
import paysage from './../../assets/images/paysage.png';
import SearchPlace from '../../modules/map/SearchPlace';
import { ICoordinateGps } from '../../typing/pointOfInterest';
import carteFrance from './../../assets/images/France.png';
import voitureBlue from './../../assets/images/voiture-blue.svg';
import voiturePendue from './../../assets/images/voiture-pendue.svg';
import formeJaune from './../../assets/images/forme-jaune.svg';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';

export interface IProps {
  setCoordinateSelected: (value: ICoordinateGps) => void;
  setAddressSelected: (value: string) => void;
}

export const HomePage: FC<IProps> = (props) => {
  const { setCoordinateSelected, setAddressSelected } = props;
  const classes = useStyles();

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

  return (
    <div className={`overflow-x-hidden ${classes.containerPAge}`}>
      <div className={`bg-blue-light relative pb-72`}>
        <div className="absolute -z-20 bg-blue-light rounded-100 h-96 w-giga -bottom-12 left-2/4 transform -translate-x-2/4"></div>
        <Header />
        <section className="w-9/12 m-auto mt-20">
          <div className="w-7/12">
            <h2 className="font-sans text-2xl mb-6 font-bold">
              Vous recherchez votre prochaine destination ?
            </h2>
            <p className={`${classes.heavitasFont} text-6xl mb-10`}>
              À la poursuite de <span className="text-blue-default">nouvelles</span> aventures ?
            </p>
            <p className="font-sans text-2xl mb-6">
              Géolocalisez vous à travers la <span className="font-bold">France</span> et découvrez
              les secrets que renferment votre destination.
            </p>
            <div className={classes.containerButton}>
              <div className="w-3/4 mb-6">
                <SearchPlace
                  setAddressSelected={setAddressSelected}
                  setCoordinateSelected={setCoordinateSelected}
                />
              </div>

              <button
                className={`p-4 w-3/4 cursor-pointer ${classes.gradientBackground} ${classes.heavitasFont}`}
                onClick={handleGetLocation}
              >
                <Link to="results">Géolocalisez moi</Link>
              </button>
            </div>
          </div>
          <img className="absolute -right-16 -bottom-32" src={accueilImage} alt="" />
          <div className="flex flex-col items-center absolute bottom-10 left-2/4 transform -translate-x-2/4">
            <p className="mb-2">Balayez bers le bas</p>
            <div className="w-10 h-14 bg-white relative rounded-3xl">
              <span className="absolute w-1 h-5 bg-black left-2/4 transform -translate-x-2/4 top-3 rounded-lg"></span>
            </div>
          </div>
        </section>
      </div>
      <section>
        <div className="mt-40 ml-12 relative">
          <div className="relative">
            <img
              className="absolute -z-3 -left-36  top-2/4 transform -translate-y-2/4"
              src={formeJaune}
              alt=""
            />
            <h2 id="aboutUs" className={`${classes.heavitasFont} text-3xl mb-6`}>
              Qui sommes-nous ?
            </h2>
          </div>
          <div className="flex relative mt-6">
            <div className="bg-white pr-11 pt-11 pb-11 w-1/2 rounded-r-corner -z-5 text-lg border-white">
              <p className="mb-4">
                <span className={classes.heavitasFont}>TOPO</span> est un site qui vous permet de
                découvrir toutes les originalités de
                <strong>votre région. </strong>
                Notre objectif est de vous proposer une sorte de <strong>guide touristique</strong>
                depuis votre téléphone <strong>sans vous déplacer.</strong>
              </p>
              <p className="mb-4">
                Vous pouvez vous localiser <strong>en direct</strong> depuis votre{' '}
                <strong>ordinateur / smartphone </strong>
                et visualiser quels sont les <strong>hôtels, cinémas, campings</strong> et autre
                autour de vous dans un rayon de <strong>15 kilomètres maximum.</strong>
              </p>
              <p className="mb-4">
                D’autres services sont proposés comme la liste des <strong>randonnées</strong>{' '}
                offerte par votre ville. Qu’elles soient pédestres, maritimes ou à cheval. Tous les
                sentiers sont recensés. Même les plus <strong>insolites.</strong>
              </p>
            </div>
            <img
              src={paysage}
              alt=""
              className="absolute right-96 -z-10 top-2/4 transform -translate-y-2/4 h-full"
            />
            <img className="absolute right-72 -z-20" src={voiturePendue} alt="" />
          </div>
          <div className="relative mb-6 mt-52">
            <img
              className="absolute -z-3 -left-36  top-2/4 transform -translate-y-2/4"
              src={formeJaune}
              alt=""
            />
            <h2 id="ourServices" className={`${classes.heavitasFont} text-3xl`}>
              Ce que nous vous proposons
            </h2>
          </div>
          <div className="mt-40 flex flex-col items-center">
            <img src={carteFrance} alt="" />
            <button
              className={`mt-28 p-4 w-1/3 cursor-pointer ${classes.gradientBackground} ${classes.heavitasFont}`}
              onClick={handleGetLocation}
            >
              <Link to="results">Découvrir les services autour de moi !</Link>
            </button>
          </div>
          <img className="absolute z-0 -bottom-48 -left-1/3" src={voitureBlue} alt="" />
        </div>
      </section>
      <div className="mt-96">
        <Footer />
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) =>
  createStyles({
    containerPAge: {
      scrollBehavior: 'smooth',
    },
    heavitasFont: {
      fontFamily: 'Heavitas',
    },
    containerButton: {
      display: 'flex',
      flexDirection: 'column',
    },
    gradientBackground: {
      background:
        'transparent linear-gradient(90deg, #F6A020 0%, #F9DD04 100%) 0% 0% no-repeat padding-box',
      boxShadow: '-4px 5px 15px #00000029',
      borderRadius: theme.spacing(1),
    },
  })
);
