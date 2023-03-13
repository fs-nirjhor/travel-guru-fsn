import Home from "./components/Home/Home";
import Header from "./components/Header/NewHeader";
import PlaceInfo from "./components/PlaceInfo/PlaceInfo";
import { Routes, Route } from "react-router-dom";
const App = () => {
return (
	<main>
	<Header/>
  	<Routes >
  	  <Route path="/" element={<Home/>}>
  	    <Route index element={<PlaceInfo defaultPlace={"place-1"}/>}/>
  	    <Route path="/:placeID" element={<PlaceInfo/>}/>
  	  </Route>
  	</Routes>
	</main>
);
};

export default App;