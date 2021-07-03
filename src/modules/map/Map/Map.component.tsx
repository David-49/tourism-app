import React, { FC } from 'react';

import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import L from 'leaflet';
import { ICoordinateGps } from '../../../typing/pointOfInterest';
import ChangeMap from '../ChangeMap';

let DefaultIcon = L.icon({
  ...L.Icon.Default.prototype.options,
  iconUrl: icon,
  iconRetinaUrl: iconRetina,
  shadowUrl: iconShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;

export interface IProps {
  coordinateGps: ICoordinateGps;
}

export const Map: FC<IProps> = (props) => {
  const { coordinateGps } = props;

  return (
    <MapContainer scrollWheelZoom={true} style={{ height: '100%', width: '100%' }} zoom={13}>
      <ChangeMap center={coordinateGps} />
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[coordinateGps.lat, coordinateGps.lng]} icon={DefaultIcon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};
