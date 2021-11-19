import { Alert, Button, CircularProgress, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import login from "../../../images/login.png";
import { NavLink , useLocation,useHistory} from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const [loginData, setLoginData] = useState({});
const{user, loginUser,signInWithGoogle, isLoading, authError}=useAuth();

const location= useLocation();
const history =useHistory();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    console.log(field, value);
    const newLoginData = { ...loginData };
    newLoginData[field]=value;
    setLoginData(newLoginData);
  };
  const handleLogin = (e) => {
    loginUser(loginData.email, loginData.password, location, history)
    e.preventDefault();
  };
  
  
  const handleGoogleSignIn=()=>{
  
  signInWithGoogle(location, history)
  
  }
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item sx={{ mt: 3 }} xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
            Login
          </Typography>
          <form onSubmit={handleLogin}>
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Your Email"
              name="email"
              onChange={handleOnChange}
              variant="standard"
            />

            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Password"
              type="Password"
              name="password"
              onChange={handleOnChange}
              variant="standard"
            />
            
            <Button
              sx={{ width: "75%", m: 1 }}
              variant="contained"
              type="submit"
            >
             
              login
            </Button>
            <NavLink to="/register">
            <Button variant="text">New user ? please Register</Button>
            </NavLink>
            
            {isLoading && <CircularProgress />}
          {user?.email && <Alert severity="success">Login successfully !</Alert>
          }
          
          {authError && <Alert severity="error">{authError}</Alert>}
          </form>
          <p>......................................</p>
          <Button onClick={handleGoogleSignIn}  variant="contained">Google sign In</Button>

        </Grid>
        <Grid item xs={12} md={6}>
          <img src={login} alt="" style={{ width: "100%" }} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
