import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";

export default function HotelInfo(props) {
  const { hotel } = props;
  const { name, photo, specs, features, review, price } = hotel;
  const { guests, bedrooms, beds, bathrooms } = specs;
  const { point, totalReviews } = review;

  return (
    <Card sx={{ display: "flex" }}>
      <CardMedia
        component="img"
        sx={{ width: 100 }}
        image={photo}
        alt="Hotel"
      />
      <CardContent className="w-100">
        <Typography component="div" variant="h5" gutterBottom>
          {name}
        </Typography>
        <Box
          component="div"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            color: "text.secondary",
            fontSize: 'small',
            textAlign: 'center',
            mb: 1,
          }}
        >
          <span> {guests} Guests</span>
          <span> {bedrooms} Bedrooms</span>
          <span> {beds} Beds </span>
          <span> {bathrooms} Bathrooms </span>
        </Box>
        {features.map((feature, i) => (
          <Typography
            key={i} 
            variant="subtitle1"
            color="text.secondary"
            component="div"
            gutterBottom
          >
            {feature}
          </Typography>
        ))}
        <Box
          component="div"
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span>
            <StarIcon color="warning" /> {point}({totalReviews})
          </span>
          <span>${price}/night</span>
          <span>${price * 3} total</span>
        </Box>
      </CardContent>
    </Card>
  );
}
