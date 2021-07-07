import React, { FC } from 'react';

import { createStyles, makeStyles } from '@material-ui/core';
import logo from './../../assets/images/logo.png';
import { Link } from 'react-router-dom';

export interface IProps {}

export const Header: FC<IProps> = (props) => {
  const classes = useStyles();

  return (
    <header className={`flex items-center text-lg w-full relative ${classes.heavitasFont}`}>
      <h1 className="flex items-center cursor-pointer">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <span>Topo</span>
      </h1>
      <nav className="absolute left-2/4 transform -translate-x-2/4">
        <ul className="flex items-center">
          <li className="m-6 whitespace-nowrap">
            <a href="#aboutUs">Qui sommes-nous ?</a>
          </li>
          <li className="m-6 whitespace-nowrap">
            <a href="#ourServices">Ce que nous vous proposons</a>
          </li>
          <li className={`${classes.gradientBackground} m-6 whitespace-nowrap px-5 py-2`}>F.A.Q</li>
        </ul>
      </nav>
    </header>
  );
};

const useStyles = makeStyles((theme) =>
  createStyles({
    heavitasFont: {
      fontFamily: 'Heavitas',
    },
    gradientBackground: {
      background:
        'transparent linear-gradient(90deg, #F6A020 0%, #F9DD04 100%) 0% 0% no-repeat padding-box',
      boxShadow: '-4px 5px 15px #00000029',
      borderRadius: theme.spacing(4),
    },
  })
);
