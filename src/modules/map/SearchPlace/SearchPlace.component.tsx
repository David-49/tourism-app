import React, { FC, useState } from 'react';

import { Container, createStyles, makeStyles } from '@material-ui/core';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

export interface IProps {}

export const SearchPlace: FC<IProps> = (props) => {
  const classes = useStyles();
  const [location, setLocation] = useState<string>('');
  const [coordinates, setCoordinates] = useState({
    lat: 12.693,
    lng: -164.602,
  });

  const handleSelect = async (value: string) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setLocation(value);
    setCoordinates(latLng);
  };

  console.log(coordinates);

  return (
    <Container>
      <PlacesAutocomplete value={location} onChange={setLocation} onSelect={handleSelect}>
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Rechercher un lieu ...',
                className: classes.locationSearchInput,
              })}
            />
            {!!suggestions && (
              <div className={classes.containerDropdown}>
                {loading && <div>Loading...</div>}
                {suggestions.map((suggestion) => {
                  const className = suggestion.active
                    ? classes.suggestionItemActive
                    : classes.suggestionItem;
                  const style = suggestion.active
                    ? { backgroundColor: '#3585F2', cursor: 'pointer' }
                    : { backgroundColor: '#ffffff', cursor: 'pointer' };
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style,
                      })}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </PlacesAutocomplete>
    </Container>
  );
};

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 400,
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    locationSearchInput: {
      padding: theme.spacing(1.5),
      borderRadius: theme.spacing(1),
      border: 'solid 1px #D2D2D2',
      boxShadow: '2px 4px 11px -10px #000000',
    },
    suggestionItemActive: {
      color: 'white',
      padding: theme.spacing(1),
      borderRadius: theme.spacing(1),
    },
    suggestionItem: {
      padding: theme.spacing(1),
      borderRadius: theme.spacing(1),
    },
    containerDropdown: {
      border: 'solid 1px #D2D2D2',
      borderRadius: theme.spacing(1),
    },
  })
);
