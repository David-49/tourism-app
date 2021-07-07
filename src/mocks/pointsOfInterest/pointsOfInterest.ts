import {
  IEntertainmentOfInterest,
  IHikingOfInterest,
  ILodgingOfInterest,
  IRestaurantOfInterest,
} from '../../typing/pointOfInterest';

export const restaurantOfInterestMocks: IRestaurantOfInterest[] = [
  {
    id: '0',
    name: "L'atelier",
    type: 'Crêperie',
    vicinity: 'Vannes, France',
    address: '7, Rue Noé',
    phone_number: '02 97 01 34 68',
    url_image: '/assets/images/photos_resto/resto_1_thumb.jpeg',
    description:
      "Réservations, Terrasse, Places assises, Chaises hautes, disponibles, Accès personnes handicapées, Sert de l'alccol, Bar complet, Accepte les cartes bancaitres, Service de table",
    shortDescription: 'Cuisine française (galettes, crêpes)',
    special_regime: 'Végétariens, Végans',
    location: {
      lat: 47.6564336,
      lng: -2.7580593,
    },
  },
  {
    id: '1',
    name: 'Le cosy',
    type: 'Pizzéria',
    vicinity: 'Vannes, France',
    address: '2 Place Maurice Marchais',
    phone_number: '02 97 47 63 93',
    url_image: '/assets/images/photos_resto/resto_2_thumb.jpeg',
    shortDescription: 'Cuisine européenne (pizzéria, burgers, salades…)',
    special_regime: 'Végétariens, Végans',
    location: {
      lat: 47.6583465,
      lng: -2.7603655,
    },
    description:
      'Réservations, Terrasse, Places assises, Chaises hautes disponibles, Accès personnes handicapées, Sert de l’alcool, Bar complet, Accepte les cartes bancaires, Service de table',
    others_images: [
      '/assets/images/photos_resto/resto_2_thumb.jpeg',
      '/assets/images/photos_resto/resto_2_2.jpeg',
      '/assets/images/photos_resto/resto_2_3.jpeg',
    ],
  },
];

export const entertainmentOfInterestMocks: IEntertainmentOfInterest[] = [
  {
    id: '0',
    name: 'Le Musée de la cohue',
    type: 'Musée',
    vicinity: 'Vannes, France',
    address: '9, Place Saint Pierre',
    phone_number: '02 97 47 63 93',
    url_image: '/assets/images/photos_evenements/musee_thumb.jpeg',
    description:
      'Enrichies de nombreux dépôts d’œuvres, les collections proposent aux visiteurs un parcours rythmé d’espaces variés. Sa partie la plus ancienne remonte au XIIIe siècle, et l’édifice est agrandi aux XIVe et XVIIe',
    shortDescription: 'Musée des Beaux-arts de Vannes',
    location: {
      lat: 47.657612,
      lng: -2.757354,
    },
    others_images: [
      '/assets/images/photos_evenements/musee_1.jpeg',
      '/assets/images/photos_evenements/musee_2.jpeg',
      '/assets/images/photos_evenements/musee_3.jpeg',
    ],
  },
  {
    id: '1',
    name: 'Cinéville Parc Lann',
    type: 'Cinéma',
    vicinity: 'Vannes, France',
    address: 'Rue Aristide Boucicaut',
    phone_number: '02 97 42 51 81',
    url_image: '/assets/images/photos_evenements/cine_thumb.jpeg',
    shortDescription: 'Cinéma de Vannes',
    location: {
      lat: 47.6689414,
      lng: -2.7912661,
    },
    others_images: [
      '/assets/images/photos_evenements/film_1.jpeg',
      '/assets/images/photos_evenements/film_2.jpeg',
      '/assets/images/photos_evenements/film_3.jpeg',
      '/assets/images/photos_evenements/film_4.jpeg',
    ],
  },
];

export const hikingOfInterestMocks: IHikingOfInterest[] = [
  {
    id: '0',
    name: 'Rando des Rives de Vannes',
    vicinity: 'Vannes, France',
    address: 'Départ giratoire du Racquer',
    phone_number: '02 97 42 33 81',
    url_image: '/assets/images/photo_rando/rando_thumb.jpeg',
    description:
      'Randonnée - Intermédiaire. Bonne condition physique nécessaire. Sentiers facilement accessibles. Pour tous les niveaux.',
    location: {
      lat: 47.66667,
      lng: -2.75,
    },
    duration: '2 h 15',
    distance: 7.2,
    others_images: [
      '/assets/images/photo_rando/rando_thumb.jpeg',
      '/assets/images/photo_rando/rando_2_2.jpeg',
      '/assets/images/photo_rando/rando_3_3.jpeg',
    ],
  },
  {
    id: '1',
    name: 'Circuit des Moulins – Saint Avé',
    vicinity: 'Vannes, France',
    address: '13 Place Notre-Dame du Loc',
    phone_number: '02 97 42 51 81',
    url_image: '/assets/images/photo_rando/rando_2_thumb.jpeg',
    description:
      'Randonnée - Intermédiaire. Bonne condition physique nécessaire. Sentiers facilement accessibles. Pour tous les niveaux.',
    location: {
      lat: 47.6897432,
      lng: -2.7299126,
    },
    duration: '3 h 15',
    distance: 9.5,
    others_images: [
      '/assets/images/photo_rando/rando_2_thumb.jpeg',
      '/assets/images/photo_rando/rando_2_2.jpeg',
      '/assets/images/photo_rando/rando_3_3.jpeg',
    ],
  },
];

export const lodgingOfInterestMocks: ILodgingOfInterest[] = [
  {
    id: '0',
    name: "Appart'city confort Vannes",
    vicinity: 'Vannes, France',
    address: 'Rue Alfred Kastler',
    phone_number: '02 97 44 29 70',
    url_image: '/assets/images/photo_hotel/hotel_thumb.jpeg',
    location: {
      lat: 47.6433663,
      lng: -2.7474557,
    },
  },
  {
    id: '1',
    name: 'Première classe Vannes',
    vicinity: 'Vannes, France',
    address: 'Zac du Chapeau Rouge',
    phone_number: '02 97 45 51 29',
    url_image: '/assets/images/photo_hotel/hotel_2_thumb.jpeg',
    location: {
      lat: 47.6695027,
      lng: -2.7222766,
    },
    info_sup: [
      'Animaux de compigne acceptés',
      'Appartements accessibles',
      'Laverie',
      'Toilettes',
      'Parking',
      'Salle de fitness',
    ],
    others_images: [
      '/assets/images/photo_hotel/hotel_2_2.jpeg',
      '/assets/images/photo_hotel/hotel_2_3.jpeg',
      '/assets/images/photo_hotel/hotel_2_4.jpeg',
    ],
  },
];
