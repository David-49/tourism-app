export type TTypeResource = 'Restaurant' | 'Location' | 'Fast-food' | 'Bar' | 'Hotel' | 'Camping';

export interface IGeoResource {
  id: string;
  name: string;
  type: TTypeResource;
  lat: string;
  lon: string;
}
