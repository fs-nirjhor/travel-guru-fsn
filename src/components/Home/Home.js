import { placeData } from "../../data/placeData";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { NavLink, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url('./images/Rectangle 1.png')",
      }}
      className="d-flex align-items-center"
    >
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={5} className="text-white">
            <Outlet />
          </Grid>
          <Grid item xs={7}>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              {placeData.map((place) => (
                <Grid
                  item 
                  xs={3}
                  key={place.id}
                  as={NavLink}
                  to={place.id === "place-1" ? "/" : place.id }
                  className="rounded pe-1"
                  style={({ isActive, isPending }) => {
                    return {
                      border: isActive ? "3px ridge goldenrod" : "",
                    };
                  }}
                  end
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
      </Container>
    </Box>
  );
};

export default Home;
