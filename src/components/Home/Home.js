import { placeData } from "../../data/placeData";
import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { ImageListItem, ImageListItemBar } from "@mui/material";
import PlaceInfo from "../PlaceInfo/PlaceInfo";


const Home = () => {
  const [placeID, setPlaceID] = useState("place-1");
  const [slide, setSlide] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentPlaceIndex = placeData.findIndex(place => place.id === placeID);
      const nextPlaceIndex = placeData[(currentPlaceIndex + 1) % placeData.length].id;
      setSlide(true);
      setTimeout(() => {
        setPlaceID(nextPlaceIndex);
        setSlide(false);
      }, 1200); 
    }, 4000); 
    return () => clearInterval(interval);
  }, [placeID]);

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item xs={12} md={5} className="text-white mb-5 overflow-hidden">
        <PlaceInfo placeID={placeID} slide={slide} />
      </Grid>
      <Grid item xs={12} md={7}>
        <Grid container direction="row" justifyContent="center" alignItems="center">
          {placeData.map((place) => (
            <Grid
              item 
              xs={3}
              key={place.id}
              onClick={() => setPlaceID(place.id)}
              className={place.id === placeID ? "rounded pe-1 border border-2 border-warning" : "rounded pe-1"}
            >
              <ImageListItem key={place.photo}>
                <img
                  src={place.photo}
                  srcSet={place.photo}
                  alt={place.id}
                  loading="lazy"
                />
                <ImageListItemBar title={place.name} />
              </ImageListItem>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home ;