import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import iss from './satellite.png'

const Map = ({ center, zoom }) => {

    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyCFm4BxlwGHgoemOqMW4dsKVvcjmsljxNU' }}
                defaultCenter={ center }
                defaultZoom={ zoom }
            >
                {/* <img src={iss}/> */}
            </GoogleMapReact>
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756
    },
    zoom: 6
}

export default Map
