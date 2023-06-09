import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import PlaceBooking from "./components/PlaceBooking/PlaceBooking";
import HotelBooking from "./components/HotelBooking/HotelBooking";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { Routes, Route } from "react-router-dom";
import {Box, Container} from "@mui/material";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "./firebase.init";

const App = () => {
	const [user] = useAuthState(auth);
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
   <Container >
  	<Routes >
  	  <Route path="/" element={<Home/>} />
  	  <Route path="/login" element={<Login/>}/>
  	  <Route path="/signup" element={<Signup/>}/>
  	  <Route path="/:placeID" element={<PlaceBooking/>}/>
  	  <Route element={<PrivateRoute isValid={!!user}/>}>
  	  <Route path="/:placeID/hotels" element={<HotelBooking/>}/>
  	  </Route>
  	</Routes>
   </Container>
	</Box>
);
};

export default App;