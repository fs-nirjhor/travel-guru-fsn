import { useParams } from "react-router-dom";
import {placeData} from "../../data/placeData";
import {hotelData} from "../../data/hotelData";
import Map from "../Map/OpenStreetMap";
import HotelInfo from "../HotelInfo/HotelInfo";
import { Grid } from "@mui/material";

const HotelBooking = () => {
	const {placeID} = useParams();
	const place = placeData.find(place => place.id === placeID);
	const hotels = hotelData.filter(hotel => hotel.location === place.name);
return (
	<Grid container >
	 <Grid item xs={12} md={7} className="pe-3">
		{
			hotels.map(hotel => <HotelInfo hotel={hotel} key={hotel.id}/>)
		}
	 </Grid>
	 <Grid item xs={12} md={5} className="p-2">
      <Map location={place.location} address={place.name}/>
	 </Grid>
	</Grid>
);
};

export default HotelBooking;