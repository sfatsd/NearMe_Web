 import React from 'react';
 import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
 import { POS_KEY } from '../constants';
 import { AroundMarker } from './AroundMarker'

 class AroundMap extends React.Component {


    render() {
        const pos = JSON.parse(localStorage.getItem(POS_KEY));
        return (
              <GoogleMap
                defaultZoom={11}
                defaultCenter={{ lat: pos.lat, lng: pos.lon }}
              >
              <AroundMarker position = {{ lat: pos.lat, lng: pos.lon }}/>
              </GoogleMap>
        );
    }
 }

 export const WrappedAroundMap = withScriptjs(withGoogleMap(AroundMap));