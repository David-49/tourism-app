import React, { FC } from 'react';

import { createStyles, makeStyles } from '@material-ui/core';
import logo from './../../assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export interface IProps {}

export const Footer: FC<IProps> = (props) => {
  const classes = useStyles();

  return (
    <footer className="bg-bgFooter w-full p-8">
      <div className="w-full flex justify-around items-center">
        <div className="flex items-center">
          <img src={logo} alt="" />
          <p className={`${classes.heavitasFont} text-xl`}>Topo</p>
        </div>
        <div>
          <p className="text-xl font-bold">Suivre nos réseaux sociaux</p>
          <div className="flex justify-between w-full text-5xl mt-4">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faLinkedin} />
          </div>
        </div>
        <div className="text-lg">
          <p>
            <strong>Contact :</strong> contact@topo.fr
          </p>
          <p>
            <strong>Téléphone :</strong> 02.54.54.65.76
          </p>
          <p>
            <strong>Adresse :</strong> 8, Rue, Joseph Fourrier, 49000, Angers
          </p>
        </div>
      </div>
      <div className="flex justify-center text-xl mt-12">
        <ul className="flex font-bold">
          <li className="mr-4">Mentions légales</li>
          <li>
            <a href="#aboutUs">Qui sommes-nous ?</a>
          </li>
          <li className="ml-4">F.A.Q</li>
        </ul>
      </div>
    </footer>
  );
};

const useStyles = makeStyles((theme) =>
  createStyles({
    heavitasFont: {
      fontFamily: 'Heavitas',
    },
  })
);
