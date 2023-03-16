import React from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const OpenStreetMap = (props) => {
	const {location, address} = props;
  return (
    <MapContainer center={location} zoom={20} scrollWheelZoom={false} style={{height:"80vh", width:"100%", margin: "auto", borderRadius: 5}}>
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
  );
};

export default OpenStreetMap;
