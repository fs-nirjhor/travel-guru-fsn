import { Button, Divider } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import {
  useSignInWithGoogle,
  useSignInWithFacebook,
} from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";
import { useLocation, useNavigate } from "react-router-dom";

const OtherLogin = () => {
  // const FacebookIcon = () => <img src="/images/icons/google.png" alt="Google" width="10%"/>
  // const GoogleIcon = () => <img src="/images/icons/fb.png" alt="Facebook" />
  
  const location = useLocation();
	const navigate = useNavigate();
  const [signInWithFacebook, facebookUser, signingFacebook, errorFacebook] = useSignInWithFacebook(auth);
  const [signInWithGoogle, googleUser, signingGoogle, errorGoogle] = useSignInWithGoogle(auth);
  const handleSignin = async (method) => {
  	const success = await method();
  	if (success) {
  		navigate(location.state?.from);
  	}
  };
  return (
    <div className="my-3">
      <Divider className="my-2">OR</Divider>
      <Button
        fullWidth
        variant="outlined"
        className="my-1 rounded-pill"
        startIcon={<FacebookIcon />}
        onClick = { () => handleSignin(signInWithFacebook) }
      >
        <span className="text-dark">
        {facebookUser ? facebookUser.user.displayName : signingFacebook ? <HourglassBottomIcon/> : "Continue with Facebook"}
        </span>
      </Button>
      <Button
        fullWidth
        variant="outlined"
        className="my-1 rounded-pill"
        color="error"
        startIcon={<GoogleIcon />}
        onClick = { () => handleSignin(signInWithGoogle) }
      >
        <span className="text-dark">
        {googleUser ? googleUser.user.displayName : signingGoogle ? <HourglassBottomIcon/> : "Continue with Google" }
        </span>
      </Button>
      <h6 className="text-center text-danger my-2">{errorFacebook ? errorFacebook.code : errorGoogle ? errorGoogle.code : ""}</h6>
    </div>
  );
};

export default OtherLogin;
