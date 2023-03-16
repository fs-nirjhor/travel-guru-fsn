import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import {placeData} from "../../data/placeData";
import BookingForm from "../BookingForm/BookingForm";

const PlaceBooking = () => {
	const {placeID} = useParams();
	const place = placeData.find(place => place.id === placeID);
return (
		<Grid container alignItems="center">
		   <Grid item xs={12} md={6} className="text-white px-2">
		      <h1 className="text-center">{place.name}</h1>
		      <p>{place.description}</p>
		   </Grid>
		   <Grid item xs={12} md={6}>
		      <BookingForm placeID={placeID}/>
		   </Grid>
		</Grid>
);
};

export default PlaceBooking;