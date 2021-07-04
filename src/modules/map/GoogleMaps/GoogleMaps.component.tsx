import React, { FC, useCallback, useEffect, useState } from 'react';

import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';
import { ICoordinateGps } from '../../../typing/pointOfInterest';
import Geocode from 'react-geocode';

export interface IProps {
  coordinateGps: ICoordinateGps;
}

export const Map: FC<IProps> = (props) => {
  const { coordinateGps } = props;

  const [coordsResult, setCoordsResult] = useState<google.maps.places.PlaceResult[] | undefined>(
    []
  );
  const [listMarker, setListMarker] = useState<ICoordinateGps[]>([]);
  const [showInfo, setShowInfo] = useState<boolean>(false);

  Geocode.setApiKey('AIzaSyCzXx7_Ty2dlamb77uQGYHsmL1omLa7YKM');

  Geocode.setLanguage('fr');

  Geocode.setRegion('fr');

  const onMapLoad = useCallback(
    (map: google.maps.Map | HTMLDivElement) => {
      let request = {
        location: coordinateGps,
        radius: 500,
        type: 'restaurant',
      };

      let service = new google.maps.places.PlacesService(map);

      service.nearbySearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          const coords = results?.map((result) => result);

          if (!results) return;

          setCoordsResult(coords);
        }
      });
    },
    [coordinateGps]
  );

  let arrayCoordinate: ICoordinateGps[] = [];
  useEffect(() => {
    coordsResult?.forEach((result) => {
      if (!result.vicinity) return;
      Geocode.fromAddress(result.vicinity).then(
        (response) => {
          const markerCoordinate = response.results[0].geometry.location;
          // console.log(markerCoordinate);

          arrayCoordinate.push(markerCoordinate);
          setListMarker(arrayCoordinate);
        },
        (error) => {
          console.error(error);
        }
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coordsResult]);

  console.log(coordsResult);

  coordsResult?.forEach((result, i) => {
    console.log(result);
    console.log(listMarker[i]);
  });

  return (
    <div>
      <GoogleMap
        center={coordinateGps}
        zoom={13}
        onLoad={(map) => onMapLoad(map)}
        mapContainerStyle={{ height: '400px', width: '800px' }}
      >
        {/* {coordsResult !== [] &&
          !!coordsResult &&
          coordsResult.map(function (results, i) {
            return (
              <Marker key={i} position={listMarker[i]}>
                <InfoWindow options={{ maxWidth: 300 }}>
                  <span>{results.name}</span>
                </InfoWindow>
              </Marker>
            );
          })} */}
        <Marker
          clickable={true}
          onClick={() => setShowInfo(true)}
          position={{ lat: 47.47116159999999, lng: -0.5518257 }}
        >
          {!!showInfo && (
            <InfoWindow
              position={{ lat: 47.47116159999999, lng: -0.5518257 }}
              options={{ maxWidth: 300 }}
              onCloseClick={() => setShowInfo(false)}
            >
              <span>Test 1</span>
            </InfoWindow>
          )}
        </Marker>
        {/* <Marker position={{ lat: 47.47194529999999, lng: -0.5534026 }}>
          <InfoWindow options={{ maxWidth: 300 }}>
            <span>Test 2</span>
          </InfoWindow>
        </Marker> */}
      </GoogleMap>
    </div>
  );
};

export default Map;
