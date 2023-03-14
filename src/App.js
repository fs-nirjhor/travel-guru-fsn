import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import PlaceBooking from "./components/PlaceBooking/PlaceBooking";
import HotelBooking from "./components/HotelBooking/HotelBooking";
import { Routes, Route } from "react-router-dom";
import {Box, Container} from "@mui/material";

const App = () => {
return (
	<Box
	sx={{
        minHeight: "100vh",
        width: "100vw",
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url('./images/Rectangle 1.png')",
      }}
	>
	<Header/>
   <Container maxWidth="lg" >
  	<Routes >
  	  <Route path="/" element={<Home/>} />
  	  <Route path="/:placeID" element={<PlaceBooking/>}/>
  	  <Route path="/:placeID/hotels" element={<HotelBooking/>}/>
  	</Routes>
   </Container>
	</Box>
);
};

export default App;