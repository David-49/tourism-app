import React, { FC, useEffect, useState } from 'react';

import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';
import { IAllTypesOfInterest, ICoordinateGps } from '../../../typing/pointOfInterest';
import Geocode from 'react-geocode';
import { allTypesOfInterestMocks } from '../../../mocks/pointsOfInterest/pointsOfInterest';

export interface IProps {
  coordinateGps: ICoordinateGps;
  addressSelected: string;
  filterSelected: string;
}

export const Map: FC<IProps> = (props) => {
  const { coordinateGps, addressSelected, filterSelected } = props;

  // const [coordsResult, setCoordsResult] = useState<google.maps.places.PlaceResult[] | undefined>(
  //   []
  // );
  // const [listMarker, setListMarker] = useState<ICoordinateGps[]>([]);
  const [showInfo, setShowInfo] = useState<boolean>(false);
  const [filteredPointsOfInterest, setFilteredPointsOfInteres] = useState<IAllTypesOfInterest[]>(
    []
  );
  const [selectedInfoWindow, setSelectedInfoWindow] = useState<number | null>(null);

  Geocode.setApiKey('AIzaSyCzXx7_Ty2dlamb77uQGYHsmL1omLa7YKM');

  Geocode.setLanguage('fr');

  Geocode.setRegion('fr');

  useEffect(() => {
    const filterCity = allTypesOfInterestMocks.filter((type) => type.vicinity === addressSelected);
    setFilteredPointsOfInteres(filterCity);
    if (!filterCity.length) return;

    if (filterSelected === 'Tout') {
      setFilteredPointsOfInteres(filterCity);
      return;
    }

    const filterTypeOfInterest = filterCity.filter(
      (pointOfInterest) => pointOfInterest.typeOfInterest === filterSelected
    );

    setFilteredPointsOfInteres(filterTypeOfInterest);

    console.log(filterTypeOfInterest);
  }, [addressSelected, filterSelected]);

  // const onMapLoad = useCallback(
  //   (map: google.maps.Map | HTMLDivElement) => {
  //     let request = {
  //       location: coordinateGps,
  //       radius: 500,
  //       type: 'restaurant',
  //     };

  //     let service = new google.maps.places.PlacesService(map);

  //     service.nearbySearch(request, (results, status) => {
  //       if (status === google.maps.places.PlacesServiceStatus.OK) {
  //         const coords = results?.map((result) => result);

  //         if (!results) return;

  //         setCoordsResult(coords);
  //       }
  //     });
  //   },
  //   [coordinateGps]
  // );

  // let arrayCoordinate: ICoordinateGps[] = [];
  // useEffect(() => {
  //   coordsResult?.forEach((result) => {
  //     if (!result.vicinity) return;
  //     Geocode.fromAddress(result.vicinity).then(
  //       (response) => {
  //         const markerCoordinate = response.results[0].geometry.location;

  //         arrayCoordinate.push(markerCoordinate);
  //         setListMarker(arrayCoordinate);
  //       },
  //       (error) => {
  //         console.error(error);
  //       }
  //     );
  //   });
  // }, [coordsResult]);

  const handleShowInfo = (index: number | null) => {
    setSelectedInfoWindow(index);
    setShowInfo(!showInfo);
  };

  return (
    <div className="flex justify-center">
      <GoogleMap
        center={coordinateGps}
        zoom={13}
        // onLoad={(map) => onMapLoad(map)}
        mapContainerStyle={{ height: '600px', width: '1220px' }}
      >
        {filteredPointsOfInterest.map((result, i) => (
          <Marker
            key={i}
            clickable={true}
            onClick={() => handleShowInfo(i)}
            position={{ lat: result.location.lat, lng: result.location.lng }}
          >
            {selectedInfoWindow === i && (
              <InfoWindow
                position={{ lat: result.location.lat, lng: result.location.lng }}
                options={{ maxWidth: 300 }}
                onCloseClick={() => handleShowInfo(null)}
              >
                <div>
                  <p>{result.name}</p>
                  <p>{result.vicinity}</p>
                  <p>{result.address}</p>
                  <a href={`tel:${result.phone_number}`}>{result.phone_number}</a>
                </div>
              </InfoWindow>
            )}
          </Marker>
        ))}
        {/* {filteredPointsOfInterest.map((result, i) => (
          { selectedInfoWindow === i && (
       
       
          )}
          ))} */}
      </GoogleMap>
    </div>
  );
};

export default Map;
