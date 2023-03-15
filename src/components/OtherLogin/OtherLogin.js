import { Button, Divider } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';

const OtherLogin = () => {
	// const FacebookIcon = () => <img src="/images/icons/google.png" alt="Google" width="10%"/> 
	// const GoogleIcon = () => <img src="/images/icons/fb.png" alt="Facebook" />
return (
	<div className="my-3">
	<Divider className="my-2">OR</Divider>
		<Button fullWidth variant="outlined"  className="my-1 rounded-pill" startIcon={<FacebookIcon/>}>
  <span className="text-dark">Continue with Facebook</span> 
</Button>
<Button fullWidth variant="outlined"  className="my-1 rounded-pill" color="error" startIcon={<GoogleIcon/>}>
  <span className="text-dark">Continue with Google </span>
</Button>
	</div>
);
};

export default OtherLogin;