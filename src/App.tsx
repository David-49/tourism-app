import React from 'react';

function App() {
  const success = (pos: any) => {
    const crd = pos.coords;

    console.log('Votre position actuelle est :');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude : ${crd.longitude}`);
    console.log(`La précision est de ${crd.accuracy} mètres.`);
  };

  const error = (err: any) => {
    console.warn(`ERREUR (${err.code}): ${err.message}`);
  };

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  navigator.geolocation.getCurrentPosition(success, error, options);
  return <h1>Hello world !</h1>;
}

export default App;
