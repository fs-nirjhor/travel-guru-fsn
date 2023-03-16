import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Box, Grid, Button, TextField } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";

export default function BookingForm() {
	const navigate = useNavigate();
	const {placeID} = useParams();
	const [value, setValue] = React.useState(dayjs(''));
	const handleSubmit = (e) => {
		e.preventDefault();
		navigate(`/${placeID}/hotels`);
	};
  return (
  	<Box sx={{backgroundColor: 'white', margin: 2, padding: 2, borderRadius: 2}}>
  	<form onSubmit={handleSubmit}>
      <TextField label="Origin" variant="filled" className="w-100 my-2" required/>
      <TextField label="Destination" variant="filled" className="w-100 my-2" required/>
  	
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer 
        components={[
          'DatePicker',
          'DatePicker',
        ]}
      >
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <DatePicker label="Check-in"
          value={value}
          onChange={(newValue) => setValue(newValue)} 
          disablePast 
          views={['year', 'month', 'day']} 
          required
          />
        </Grid>
        <Grid item xs={6}>
          <DatePicker label="Check-out" 
          value={value}
          onChange={(newValue) => setValue(newValue)} 
          disablePast 
          required 
          />
        </Grid>
      </Grid>
      </DemoContainer>
    </LocalizationProvider>
    <Button type="submit" variant="contained" color="warning" className="w-100 my-3">Start Booking</Button>
    </form>
  	</Box>
  );
}
