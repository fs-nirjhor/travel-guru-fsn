import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {
  TextField,
  Box,
  FormControl,
  InputLabel,
  InputAdornment,
  IconButton,
  Input,
  Button, 
  Typography,
  Container
} from "@mui/material";
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import OtherLogin from "../OtherLogin/OtherLogin";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import {auth} from "../../firebase.init";

const Login = () => {
	const {register, handleSubmit} = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [ signInWithEmailAndPassword, user, loading, error ] = useSignInWithEmailAndPassword(auth);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const onSubmit = (data) => {
  	const {email, password} = data ;
  	signInWithEmailAndPassword(email,password);
  };
  return (
  	<Container maxWidth="sm">
    <Box
      sx={{
        backgroundColor: "white",
        padding: 5,
        borderRadius: 2,
      }}
    >
    <Typography variant="h5" >Login</Typography >
      <form onSubmit={handleSubmit(onSubmit)} >
        <TextField
          fullWidth
          type="email"
          label="Email"
          variant="standard"
          placeholder="Your Email Address"
          margin="normal" 
          required 
          {...register("email")}
        />
        <FormControl fullWidth variant="standard" margin="normal">
          <InputLabel >
            Password
          </InputLabel>
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Your Password" 
            required 
            {...register("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Box className="text-center my-2">
        { error ? 
        <Typography variant="subtitle2" className="text-danger">{ error.code } </Typography>
        : user ? 
        <Typography variant="subtitle2" className="text-success"> Welcome {user.user.displayName} </Typography> 
        : loading ? 
        <Typography variant="subtitle2" className="text-muted"> Loading... {<HourglassBottomIcon/>}</Typography>
        : ""
        }
        </Box>
        <Button type="submit" fullWidth variant="contained" color="warning" sx={{my: 2}}>Login</Button>
      </form>
      <Typography variant="body1" align="center">Don't have an account?  
      <Link to="/signup"> Create an account</Link>
      </Typography>
      <OtherLogin/>
    </Box>
    </Container>
  );
};

export default Login;
