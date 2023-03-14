import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';

const OpenStreetMap = (props) => {
	const {location, address} = props;
  return (
  	<div>
    <MapContainer center={location} zoom={20} scrollWheelZoom={false} style={{height:"50vh", width:"100%", margin: "auto"}}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={location} >
    <Popup>
      {address}
    </Popup>
  </Marker>
</MapContainer>
  	</div>
  );
};

export default OpenStreetMap;
