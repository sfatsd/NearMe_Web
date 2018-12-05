import React from 'react';
import { Marker, InfoWindow } from 'react-google-maps';


export class AroundMarker extends React.Component {
     state = {
         isOpen: false,
     }
     onToggleOpen = () => {
        this.setState((preState) => {
            return { isOpen: !preState.isOpen };
        });

     }
     onMouseOverOpen = () => {
        this.setState({ isOpen: true});
     }

     getInfoWindowContent = () => {
       const { url, message, user } = this.props.post;
       return (
         <div>
           <img
             className="around-marker-image"
             src={url}
             alt={message}
           />
           <p>{`${user}: ${message}`}</p>
         </div>
       );
     }



    render() {

       return (
         <Marker
           position={this.props.position}
           onClick={this.onToggleOpen}
           onMouseOver={this.onToggleOpen}
         >
           {this.state.isOpen ?
             <InfoWindow onClick={this.onToggleOpen}>
               {this.getInfoWindowContent()}
             </InfoWindow> : null}
         </Marker>
       );

    }

}