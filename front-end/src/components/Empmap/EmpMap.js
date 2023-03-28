import {Map,TileLayer,Marker} from 'react-leaflet'
import "leaflet/dist/images/marker-icon-2x.png";
import './Empmap.css'
function EmpMap({location}) {            
    return ( 
        <div>            
            <Map center={location} zoom={10} scrollWheelZoom={false}>
                <TileLayer                    
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={location}></Marker>
            </Map>
        </div>        
    )
}

export default EmpMap
