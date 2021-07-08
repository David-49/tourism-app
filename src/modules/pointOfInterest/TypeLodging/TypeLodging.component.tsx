import React, { FC, useState, useEffect } from 'react';

import {
  Card,
  CardActions,
  Collapse,
  createStyles,
  IconButton,
  makeStyles,
} from '@material-ui/core';
import orangeForm from './../../../assets/images/forme-type-lodging.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { lodgingOfInterestMocks } from '../../../mocks/pointsOfInterest/pointsOfInterest';
import {
  faLaptop,
  faMapMarkerAlt,
  faPhone,
  faPaw,
  faParking,
  faDumbbell,
  faRestroom,
  faHotTub,
  faWheelchair,
} from '@fortawesome/free-solid-svg-icons';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { ILodgingOfInterest } from '../../../typing/pointOfInterest';

export interface IProps {
  addressSelected: string;
}

export const TypeLodging: FC<IProps> = (props) => {
  const classes = useStyles();
  const { addressSelected } = props;

  const [expanded, setExpanded] = useState<boolean>(false);
  const [cardSelected, setCardSelected] = useState({});
  const [filteredHiking, setFilteredHiking] = useState<ILodgingOfInterest[]>([]);

  const listIcon = [faPaw, faWheelchair, faRestroom, faParking, faDumbbell, faHotTub];

  useEffect(() => {
    const filterCityLodging = lodgingOfInterestMocks.filter(
      (lodging) => lodging.vicinity === addressSelected
    );
    setFilteredHiking(filterCityLodging);
  }, [addressSelected]);

  const handleExpandClick = (index: number) => {
    setCardSelected(index);
    setExpanded(!expanded);
  };

  return (
    <div className="ml-20">
      <div className="relative">
        <img
          className="absolute -z-5 -left-32 top-1/2 transform -translate-y-2/4"
          src={orangeForm}
          alt=""
        />
        <h2 className={`${classes.heavitasFont} text-xl`}>Hôtels/Campings</h2>
      </div>
      <div className="mt-12 space-y-20">
        {!!filteredHiking.length ? (
          filteredHiking.map((lodging, i) => (
            <Card key={i} classes={{ root: classes.card }} className="w-11/12">
              <div className="relative flex items-center">
                <div className="w-56 h-56">
                  <img
                    className="w-full h-full object-cover object-center rounded-3xl shadow-xl"
                    src={process.env.PUBLIC_URL + lodging.url_image}
                    alt=""
                  />
                </div>
                <div className="flex flex-col ml-3">
                  <h2 className={`${classes.heavitasFont} text-2xl`}>{lodging.name}</h2>
                  <div className="flex items-center ml-4 mt-4">
                    <div className="self-start text-greenlodging text-3xl">
                      <FontAwesomeIcon icon={faMapMarkerAlt} />
                    </div>

                    <div className="ml-3 space-y-2">
                      <p className="text-sm">{lodging.vicinity}</p>
                      <p className="text-sm">{lodging.address}</p>
                      <div className="flex items-center">
                        <FontAwesomeIcon icon={faLaptop} />
                        <p className="text-xs ml-2 rounded-3xl bg-greenlodging text-white px-2 py-1">
                          Voir le site internet
                        </p>
                      </div>
                      <div className="flex items-center">
                        <FontAwesomeIcon icon={faPhone} />
                        <p className="ml-2 text-xs">{lodging.phone_number}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute right-3 top-2/4 transform -translate-y-1/2 bg-orangeLodging px-6  py-5 rounded-2xl">
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
                <div className="mt-5 p-4 ml-24">
                  {!!lodging.info_sup && (
                    <div>
                      <p className="font-bold mt-6 mb-4">Détails :</p>
                      <div className={`grid grid-cols-2 gap-8`}>
                        {lodging.info_sup?.map((lodg, i) => (
                          <div key={i} className="flex items-center space-x-4">
                            <FontAwesomeIcon icon={listIcon[i]} />
                            <p>{lodg}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                {!!lodging.others_images && (
                  <div className="my-16 flex items-center justify-evenly">
                    {lodging.others_images?.map((image, i) => (
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
          <p className="mt-40 text-xl font-bold text-center">Aucun lodging n'a été trouvé 😥</p>
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
