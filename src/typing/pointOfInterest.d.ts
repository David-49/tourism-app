export type TTypePointOfInterest =
  | 'Restaurant'
  | 'Location'
  | 'Fast-food'
  | 'Bar'
  | 'Hotel'
  | 'Camping';

export interface IPointOfInterest {
  id: string;
  name: string;
  type: TTypePointOfInterest;
  lat: string;
  lon: string;
}

export interface ICoordinateGps {
  lat: number;
  lng: number;
}
