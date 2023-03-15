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
  FormHelperText,
  Button, 
  Typography, 
  Container 
} from "@mui/material";
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import OtherLogin from "../OtherLogin/OtherLogin";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import {auth} from "../../firebase.init";


const Signup = () => {
  const [ createUserWithEmailAndPassword, user, loading, error ] = useCreateUserWithEmailAndPassword(auth);
  const [updateProfile] = useUpdateProfile(auth);
  
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  
  const {register, handleSubmit, watch, formState: {errors} } = useForm();
  
  const onSubmit = async (data) => {
  	const {email, password, firstName, lastName} = data ;
  	const displayName = firstName + ' ' + lastName ;
  	const success = await createUserWithEmailAndPassword(email, password);
  	if (success) {
  		updateProfile({displayName});
  	}
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
    <Typography variant="h5" >Create An Account</Typography >
      <form onSubmit={handleSubmit(onSubmit)} >
        <TextField
          fullWidth
          type="text"
          label="First Name"
          variant="standard"
          placeholder="Your First Name"
          margin="normal" 
          required 
          {...register("firstName",{required: true})}
        />
        <TextField
          fullWidth
          type="text"
          label="Last Name"
          variant="standard"
          placeholder="Your Last Name"
          margin="normal" 
          required 
           {...register("lastName",{required: true})}
        />
        <TextField
          fullWidth
          type="email"
          label="Email"
          variant="standard"
          placeholder="Your Email Address"
          margin="normal" 
          required 
           {...register("email",{required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,})}
          helperText={ errors?.email ? "Please enter a valid email address" : ""}
        />
        <FormControl fullWidth variant="standard" margin="normal">
          <InputLabel >
            Password
          </InputLabel>
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Your Password"
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
            required 
            {...register("password",{required: true, pattern: /^[a-zA-Z0-9]{6,16}$/,})}
          />
          <FormHelperText className="text-danger">{ errors?.password ? "Password must contain at least 6 to 16 characters" : ""}</FormHelperText>
        </FormControl>
        <FormControl fullWidth variant="standard" margin="normal">
          <InputLabel >
            Confirm Password
          </InputLabel>
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Confirm Your Password"
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
            required 
            {...register("confirmPassword",{required: true, validate: (value) => value === watch("password") || "Password not matched",})}
          />
          <FormHelperText className="text-danger">{ errors?.confirmPassword ? errors?.confirmPassword?.message : ""}</FormHelperText>
        </FormControl>
        <Box className="text-center my-2">
        { error ? 
        <Typography variant="subtitle2" className="text-danger">{ error.code } </Typography>
        : user ? 
        <Typography variant="subtitle2" className="text-success"> Account created for {user.user.displayName} </Typography> 
        : loading ? 
        <Typography variant="subtitle2" className="text-muted"> Loading... {<HourglassBottomIcon/>}</Typography>
        : ""
        }
        </Box>
        <Button type="submit" fullWidth variant="contained" color="warning" sx={{my: 2}}>Create An Account</Button>
      </form>
      <Typography variant="body1" align="center">Already have an account?  
      <Link as={Link} to="/login" color="warning" > Login</Link>
      </Typography>
      <OtherLogin/>
    </Box>
    </Container>
  );
};

export default Signup;
