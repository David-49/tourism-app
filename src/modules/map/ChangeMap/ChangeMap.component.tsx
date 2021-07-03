import { FC } from 'react';
import { useMap } from 'react-leaflet';
import { ICoordinateGps } from '../../../typing/pointOfInterest';

export interface IProps {
  center: ICoordinateGps;
}

export const ChangeMap: FC<IProps> = (props) => {
  const map = useMap();
  map.setView(props.center);
  return null;
};
