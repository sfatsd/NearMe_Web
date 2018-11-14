 import React from 'react';
 import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow} from 'react-google-maps';
 import { POS_KEY } from '../constants';

 class AroundMap extends React.Component {
     state = {
         isOpen: false,
     }
     onToggleOpen = () => {
        this.setState((preState) => {
            return { isOpen: !preState.isOpen };
        });

     }

    render() {
        const pos = JSON.parse(localStorage.getItem(POS_KEY));
        return (
              <GoogleMap
                defaultZoom={11}
                defaultCenter={{ lat: pos.lat, lng: pos.lon }}
              >
                <Marker
                  position={{ lat: pos.lat, lng: pos.lon }}
                  onClick={this.onToggleOpen}
                >
                  {this.props.isOpen ?
                  <InfoWindow onCloseClick={this.onToggleOpen}>
                    <div> asd </div>
                  </InfoWindow> : null}
                </Marker>
              </GoogleMap>
        )
    }
 }

 export const WrappedAroundMap = withScriptjs(withGoogleMap(AroundMap));