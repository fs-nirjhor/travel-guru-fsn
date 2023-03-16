import {placeData} from "../../data/placeData";
import Button from '@mui/material/Button';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link } from "react-router-dom";
import "./PlaceInfo.css";

const PlaceInfo = (props) => {
  const {placeID, slide} = props;
  const place = placeData.find(place => place.id === placeID);

  return (
    <div className={`px-2 ${slide ? 'slide' : ''}`}>
      <h1 className="text-center fw-bold fs-1 font-monospace">{place.name}</h1>
      <p>{place.info}</p>
      <Link to={place.id} className="text-decoration-none">
        <Button variant="contained" color="warning" endIcon={<ArrowRightAltIcon />} >
          Booking 
        </Button>
      </Link>
    </div>
  );
};
export default PlaceInfo ;