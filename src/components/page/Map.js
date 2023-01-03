import React from 'react'
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { DataContext } from './../../App'
import 'leaflet/dist/leaflet.css';

export function Map() {
  const ContextData = React.useContext(DataContext);
  const [position, setPosition] = React.useState([ContextData.lat, ContextData.lon]);
  React.useEffect(() =>{
      setPosition([ContextData.lat, ContextData.lon]);
  }, [ContextData.lat, ContextData.lon])

  const MapComponent = () => {
    const map = useMap();
    map.panTo([position[0], position[1]]);
    return null;
  }
   return(
    <div>
        <MapContainer
        center={[position[0], position[1]]}
        zoom={11}
        scrollWheelZoom={false}
        style={{
          height: 300 + "px",
          width: 430 + "px", 
          borderRadius: 10 + "px"
        }}
        className="highlights__map"
      >
        <MapComponent />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <TileLayer
          attribution='<a href="https://openweathermap.org/">Openweathermap</a>'
          url="https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=68e0afb55f84682ae49f209717878748"
        />
        </MapContainer>
      
    </div>
  )
}