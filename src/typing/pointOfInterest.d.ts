export type TTypeOfRestaurant =
  | 'Tout'
  | 'Pizzéria'
  | 'Crêperie'
  | 'Burgers'
  | 'Asiatique'
  | 'Indien'
  | 'Bistrot';

export type TTypeOfEntertainment =
  | 'Tout'
  | 'Musée'
  | 'Cinéma'
  | 'Marchés'
  | 'Piscines'
  | 'Théâtre'
  | 'Patinoire';

export type TTypePointOfInterest =
  | 'Tout'
  | 'Restaurant'
  | 'Divertissement'
  | 'Randonnées'
  | 'Hôtels / Campings';

export interface ICitySelected {
  vicinity: string;
  url_image: string;
}

export interface IRestaurantOfInterest {
  id: string;
  name: string;
  type: TTypeOfRestaurant;
  vicinity: string;
  address: string;
  phone_number?: string;
  url_image: string;
  location: {
    lat: number;
    lng: number;
  };
  shortDescription?: string;
  description?: string;
  special_regime?: string;
  info_sup?: string;
  others_images?: string[];
}

export interface IEntertainmentOfInterest {
  id: string;
  name: string;
  type: TTypeOfEntertainment;
  vicinity: string;
  address: string;
  phone_number?: string;
  url_image: string;
  location: {
    lat: number;
    lng: number;
  };
  description?: string;
  shortDescription?: string;
  others_images?: string[];
}

export interface IHikingOfInterest {
  id: string;
  name: string;
  vicinity: string;
  address: string;
  phone_number?: string;
  url_image: string;
  location: {
    lat: number;
    lng: number;
  };
  description?: string;
  shortDescription?: string;
  distance?: number;
  duration?: string;
  others_images?: string[];
}

export interface ILodgingOfInterest {
  id: string;
  name: string;
  vicinity: string;
  address: string;
  phone_number?: string;
  url_image: string;
  info_sup?: string[];
  location: {
    lat: number;
    lng: number;
  };
  others_images?: string[];
}

export interface IAllTypesOfInterest {
  id: string;
  name: string;
  vicinity: string;
  address: string;
  url_image: string;
  special_regime?: string;
  typeOfInterest: TTypePointOfInterest;
  typeRestaurant?: TTypeOfRestaurant;
  typeEntertainment?: TTypeOfEntertainment;
  phone_number?: string;
  info_sup?: string[];
  location: {
    lat: number;
    lng: number;
  };
  distance?: number;
  duration?: string;
  description?: string;
  shortDescription?: string;
  others_images?: string[];
}

export interface ICoordinateGps {
  lat: number;
  lng: number;
}
