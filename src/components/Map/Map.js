import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import "./Map.css";

const Map = (props) => {
	const {location } = props;
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.AIzaSyDVBoZvWhmjCehTTvcyro978m9cdvtVQrU,
  });
  const center = useMemo(() => (location), [location]);

  return (
    <div className="map">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={10}
        >
          <Marker position={location} icon={"http://maps.google.com/mapfiles/ms/icons/green-dot.png"}/>
        </GoogleMap>
      )}
    </div>
  );
};

export default Map;