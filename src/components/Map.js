import GoogleMapReact from 'google-map-react'
import iss from "./satellite.png"

const Map = ({ center, zoom }) => {

    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyCFm4BxlwGHgoemOqMW4dsKVvcjmsljxNU' }}
                defaultCenter={ center }
                defaultZoom={ zoom }
            >
                <img src={iss} alt="logo" style={{height: 50, width: 50}}
                
                lat={center.lat}
                lng={center.lng}
                />
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
