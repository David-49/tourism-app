import React, { FC, useCallback, useRef, useState } from 'react';

import { GoogleMap, StandaloneSearchBox, useJsApiLoader } from '@react-google-maps/api';
import { ICoordinateGps } from '../../../typing/pointOfInterest';

export interface IProps {
  coordinateGps: ICoordinateGps;
}

export const GoogleMaps: FC<IProps> = (props) => {
  const { coordinateGps } = props;
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyCzXx7_Ty2dlamb77uQGYHsmL1omLa7YKM',
  });

  const containerStyle = {
    width: '400px',
    height: '400px',
  };

  const center = {
    lat: coordinateGps.lat,
    lng: coordinateGps.lng,
  };

  const [map, setMap] = useState(null);

  // const onLoad = useCallback(function callback(map) {
  //   const bounds = new window.google.maps.LatLngBounds();
  //   map.fitBounds(bounds);
  //   setMap(map);
  // }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  const inputEl = useRef(null);
  const onLoad = inputEl;

  const onPlaceChanged = () => console.log(inputEl.);
  

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={14}
      onUnmount={onUnmount}
    >
      <StandaloneSearchBox onLoad={onLoad}>
        <input
          ref={inputEl}
          type="text"
          placeholder="Customized your placeholder"
          style={{
            boxSizing: `border-box`,
            border: `1px solid transparent`,
            width: `240px`,
            height: `32px`,
            padding: `0 12px`,
            borderRadius: `3px`,
            boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
            fontSize: `14px`,
            outline: `none`,
            textOverflow: `ellipses`,
            position: 'absolute',
            left: '50%',
            marginLeft: '-120px',
          }}
        />
      </StandaloneSearchBox>
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
};
