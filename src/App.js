import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Box from "@mui/material/Box";
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
  	<Routes >
  	  <Route path="/" element={<Home/>} />
  	</Routes>
	</Box>
);
};

export default App;