import React, { FC, useEffect, useState } from 'react';

import {
  Card,
  CardActions,
  Collapse,
  createStyles,
  IconButton,
  makeStyles,
} from '@material-ui/core';
import RedForm from './../../../assets/images/forme-type-restaurant.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { restaurantOfInterestMocks } from '../../../mocks/pointsOfInterest/pointsOfInterest';
import { faLaptop, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { IRestaurantOfInterest } from '../../../typing/pointOfInterest';

export interface IProps {
  addressSelected: string;
}

export const TypeRestaurant: FC<IProps> = (props) => {
  const classes = useStyles();
  const { addressSelected } = props;
  const [activeType, setActiveType] = useState<string>('Tout');
  const [expanded, setExpanded] = useState<boolean>(false);
  const [cardSelected, setCardSelected] = useState({});
  const [filteredRestaurant, setFilteredRestaurant] = useState<IRestaurantOfInterest[]>([]);

  const listTypes = ['Tout', 'Pizzéria', 'Crêperie', 'Burgers', 'Asiatique', 'Indien', 'Bistrot'];

  useEffect(() => {
    const filterCityRestaurant = restaurantOfInterestMocks.filter(
      (restaurant) => restaurant.vicinity === addressSelected
    );
    setFilteredRestaurant(filterCityRestaurant);
    if (!filterCityRestaurant.length) return;

    if (activeType === 'Tout') {
      setFilteredRestaurant(filterCityRestaurant);
      return;
    }
    const filterRestaurant = filterCityRestaurant.filter(
      (restaurant) => restaurant.type === activeType
    );
    setFilteredRestaurant(filterRestaurant);
  }, [activeType, addressSelected]);

  const handleExpandClick = (index: number) => {
    setCardSelected(index);
    setExpanded(!expanded);
  };

  return (
    <div className="ml-20">
      <div className="relative">
        <img
          className="absolute -z-5 -left-32 top-1/2 transform -translate-y-2/4"
          src={RedForm}
          alt=""
        />
        <h2 className={`${classes.heavitasFont} text-xl`}>Restaurant</h2>
      </div>
      <div className="space-x-4 mt-10">
        {listTypes.map((type, i) => (
          <span
            key={i}
            onClick={() => setActiveType(type)}
            className={`${classes.heavitasFont} ${classes.chip} ${
              activeType === type ? 'shadow-none bg-redRestaurant text-white' : ''
            } px-4 py-2 cursor-pointer`}
          >
            {type}
          </span>
        ))}
      </div>
      <div className="mt-20 space-y-20">
        {!!filteredRestaurant.length ? (
          filteredRestaurant.map((restaurant, i) => (
            <Card key={i} classes={{ root: classes.card }} className="w-11/12">
              <div className="relative flex items-center">
                <div className="w-56 h-56">
                  <img
                    className="w-full h-full object-cover object-center rounded-3xl shadow-xl"
                    src={process.env.PUBLIC_URL + restaurant.url_image}
                    alt=""
                  />
                </div>
                <div className="flex flex-col ml-3">
                  <h2 className={`${classes.heavitasFont} text-2xl`}>{restaurant.name}</h2>
                  <div className="flex items-center ml-4 mt-4">
                    <div className="self-start text-redRestaurant text-3xl">
                      <FontAwesomeIcon icon={faMapMarkerAlt} />
                    </div>

                    <div className="ml-3 space-y-2">
                      <p className="text-sm">{restaurant.vicinity}</p>
                      <p className="text-sm">{restaurant.address}</p>
                      <div className="flex items-center">
                        <FontAwesomeIcon icon={faLaptop} />
                        <p className="text-xs ml-2 rounded-3xl bg-redRestaurant text-white px-2 py-1">
                          Voir le site internet
                        </p>
                      </div>
                      <div className="flex items-center">
                        <FontAwesomeIcon icon={faPhone} />
                        <p className="ml-2 text-xs">{restaurant.phone_number}</p>
                      </div>
                    </div>
                  </div>
                  <p className="mt-3">{restaurant.shortDescription}</p>
                </div>
                <div className="absolute right-3 top-2/4 transform -translate-y-1/2 bg-redRestaurant px-6  py-5 rounded-2xl">
                  <FontAwesomeIcon className="text-white" icon={faMapMarkerAlt} />
                </div>
                <CardActions className="absolute right-2 -bottom-3">
                  <IconButton
                    className={`${classes.expand} ${
                      cardSelected === i && expanded && classes.expandOpen
                    }`}
                    onClick={() => handleExpandClick(i)}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon fontSize="large" />
                  </IconButton>
                </CardActions>
              </div>
              <Collapse in={cardSelected === i && expanded} timeout="auto" unmountOnExit>
                <div className="flex items-start mt-5 p-4 space-x-10 ml-24 w-1/2">
                  <div>
                    <p className="font-bold whitespace-nowrap">Régimes spéciaux :</p>
                    <p>{restaurant.special_regime}</p>
                  </div>
                  <div>
                    <p className="font-bold whitespace-nowrap">Description :</p>
                    <p>{restaurant.description}</p>
                  </div>
                </div>
                {!!restaurant.others_images && (
                  <div className="my-16 flex items-center justify-evenly">
                    {restaurant.others_images?.map((image, i) => (
                      <div key={i} className="w-48 h-48">
                        <img
                          className="w-full h-full object-cover object-center rounded-3xl shadow-xl"
                          src={process.env.PUBLIC_URL + image}
                          alt=""
                        />
                      </div>
                    ))}
                  </div>
                )}
              </Collapse>
            </Card>
          ))
        ) : (
          <p className="mt-40 text-xl font-bold text-center">
            Aucun restaurant n'a été trouvé pour le genre {activeType} 😥
          </p>
        )}
      </div>
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
