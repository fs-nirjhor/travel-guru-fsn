import { useState } from "react";
import { Link } from "react-router-dom";
import {
  TextField,
  Box,
  FormControl,
  InputLabel,
  InputAdornment,
  IconButton,
  Input,
  FormHelperText,
  Button, 
  Typography
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Box
      sx={{
        backgroundColor: "white",
        padding: 5,
        margin: "auto",
        borderRadius: 2,
      }}
    >
    <Typography variant="h5" >Create An Account</Typography >
      <form>
        <TextField
          fullWidth
          type="text"
          label="First Name"
          variant="standard"
          placeholder="Your First Name"
          margin="normal"
        />
        <TextField
          fullWidth
          type="text"
          label="Last Name"
          variant="standard"
          placeholder="Your Last Name"
          margin="normal"
        />
        <TextField
          fullWidth
          type="email"
          label="Email"
          variant="standard"
          placeholder="Your Email Address"
          margin="normal"
          helperText="Incorrect Email."
        />
        <FormControl fullWidth variant="standard" margin="normal">
          <InputLabel htmlFor="standard-adornment-password">
            Password
          </InputLabel>
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Your Password"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          <FormHelperText>Incorrect Password</FormHelperText>
        </FormControl>
        <FormControl fullWidth variant="standard" margin="normal">
          <InputLabel htmlFor="standard-adornment-password">
            Confirm Password
          </InputLabel>
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Confirm Your Password"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          <FormHelperText>Unmatched Password</FormHelperText>
        </FormControl>
        <Button fullWidth variant="contained" color="warning" sx={{my: 2}}>Create An Account</Button>
      </form>
      <Typography variant="body1" align="center">Already have an account?  
      <Button as={Link} to="/login" color="warning">Login</Button>
      </Typography>
    </Box>
  );
};

export default Signup;
