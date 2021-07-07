import React, { FC, useState } from 'react';

import { createStyles, makeStyles } from '@material-ui/core';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { ICoordinateGps } from '../../../typing/pointOfInterest';
import { Link } from 'react-router-dom';

export interface IProps {
  setCoordinateSelected: (value: ICoordinateGps) => void;
  setAddressSelected: (value: string) => void;
}

export const SearchPlace: FC<IProps> = (props) => {
  const { setCoordinateSelected, setAddressSelected } = props;
  const classes = useStyles();
  const [location, setLocation] = useState<string>('');
  const [hasFocus, setHasFocus] = useState<boolean>(false);

  const handleSelect = async (value: string) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddressSelected(value);
    setHasFocus(false);
    setLocation(value);
    setCoordinateSelected(latLng);
  };

  return (
    <div className={classes.container}>
      <PlacesAutocomplete value={location} onChange={setLocation} onSelect={handleSelect}>
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Rechercher un lieu ...',
                className: classes.locationSearchInput,
              })}
              onFocus={() => setHasFocus(true)}
              onBlur={() => setHasFocus(false)}
            />
            {!!location && !!hasFocus && !!suggestions && (
              <div className={`${classes.containerDropdown} shadow-lg rounded-3xl`}>
                {loading && <div>Chargement...</div>}
                {suggestions.map((suggestion, i) => {
                  const className = suggestion.active
                    ? classes.suggestionItemActive
                    : classes.suggestionItem;
                  const style = suggestion.active
                    ? { backgroundColor: '#00ABEB', cursor: 'pointer' }
                    : { backgroundColor: '#ffffff', cursor: 'pointer' };
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style,
                      })}
                      key={i}
                    >
                      <span>
                        <Link to="results">{suggestion.description}</Link>
                      </span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  );
};

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      position: 'relative',
      zIndex: 9000,
    },
    locationSearchInput: {
      padding: theme.spacing(1.5),
      borderRadius: theme.spacing(1),
      boxShadow: '-4px 5px 15px #00000029',
      width: '100%',
    },
    suggestionItemActive: {
      color: 'white',
      padding: theme.spacing(1),
    },
    suggestionItem: {
      padding: theme.spacing(1),
    },
    containerDropdown: {
      borderRadius: theme.spacing(1),
      position: 'absolute',
      top: '50px',
    },
  })
);
