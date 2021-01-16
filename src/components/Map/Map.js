import React from 'react';

import { GOOGLE_MAPS_API_KEY } from '../../config/constants';

import GoogleMap from './google_maps/googleMaps';

import classes from './Map.module.scss';

const Map = ({ location, zoom }) => (
   <div className = { classes.Map }>
         <GoogleMap 
               location = { location }
               zoom = { zoom }
               googleMapURL = { "https://maps.googleapis.com/maps/api/js?key=" + GOOGLE_MAPS_API_KEY }
               loadingElement = { <div style = {{ height: `100vh`, width: '100vw' }} /> } />
   </div>
);

export default Map;
