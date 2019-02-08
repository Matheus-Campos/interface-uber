import React from 'react';
import MapViewDirections from 'react-native-maps-directions';

// import styles from './styles';

const Directions = ({ destination, origin, onReady }) => (
  <MapViewDirections
    destination={destination}
    origin={origin}
    onReady={onReady}
    apikey="AIzaSyAM-R6WHjH6lfgf7TezAIwldxMsGSTH-gs"
    strokeWidth={3}
    strokeColor="#222"
  />
);

export default Directions;
