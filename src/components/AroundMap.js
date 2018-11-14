 import React from 'react';
 import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow} from 'react-google-maps';


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
        return (
              <GoogleMap
                defaultZoom={8}
                defaultCenter={{ lat: -34.397, lng: 150.644 }}
              >
                <Marker
                  position={{ lat: -34.397, lng: 150.644 }}
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