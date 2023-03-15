import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";
import { Button } from "@mui/material";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";


const Logout = () => {
  const [signOut, loading, error] = useSignOut(auth);
  const handleSignout = () => {
    signOut();
  };
  if (error) {
    alert(error.code);
  }

  return (
      <Button variant="contained" color="warning" onClick={handleSignout}>
      {loading ? <HourglassBottomIcon/> : "Logout"}
      </Button>
  );
};
export default Logout;