import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Box, Grid, Button, TextField } from "@mui/material";
import { Link, useParams } from "react-router-dom";

export default function BookingForm() {
	const {placeID} = useParams();
	const [value, setValue] = React.useState(dayjs(''));
	
  return (
  	<Box sx={{backgroundColor: 'white', margin: 2, padding: 2, borderRadius: 2}}>
  	
      <TextField label="Origin" variant="filled" className="w-100 my-2"/>
      <TextField label="Destination" variant="filled" className="w-100 my-2"/>
  	
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
          />
        </Grid>
        <Grid item xs={6}>
          <DatePicker label="Check-out" 
          value={value}
          onChange={(newValue) => setValue(newValue)} 
          disablePast 
          />
        </Grid>
      </Grid>
      </DemoContainer>
    </LocalizationProvider>
    <Link to={`/${placeID}/hotels`} className="text-decoration-none">
    <Button variant="contained" color="warning" className="w-100 my-3">Start Booking</Button>
    </Link>
  	</Box>
  );
}
