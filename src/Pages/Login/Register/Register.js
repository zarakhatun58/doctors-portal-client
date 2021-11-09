
import { Button, Container, TextField, Typography , CircularProgress, Alert } from "@mui/material";
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import login from "../../../images/login.png";
import { NavLink, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Register = () => {

    const [loginData, setLoginData] = useState({});
    const history =useHistory();
    const {user, registerUser, isLoading, authError}=useAuth();

    const handleOnBlur = (e) => {
      const field = e.target.name;
      const value = e.target.value;
     
      const newLoginData = { ...loginData };
      newLoginData[field]=value;
      
     console.log(newLoginData);
      setLoginData(newLoginData);
    };
    
    const handleLogin = (e) => {
    console.log(loginData.email, loginData.password)
     if(loginData.password !== loginData.password2){
     alert('your password did not match');
     return
     
     }
     registerUser(loginData.email, loginData.password, history)
      e.preventDefault();
    };
    return (
        <Container>
      <Grid container spacing={2}>
        <Grid item sx={{ mt: 3 }} xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
           Register
          </Typography>
         {  !isLoading &&
         <form onSubmit={handleLogin}>
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Your Name"
              name="name"
              type="text"
              onBlur={handleOnBlur}
              variant="standard"
            />
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Your Email"
              name="email"
              type="email"
              onBlur={handleOnBlur}
              variant="standard"
            />

            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Password"
              type="Password"
              name="password"
              onBlur={handleOnBlur}
              variant="standard"
            />
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Retype Password"
              type="Password"
              name="password2"
              onBlur={handleOnBlur}
              variant="standard"
            />
            
            <Button
              sx={{ width: "75%", m: 1 }}
              variant="contained"
              type="submit"
            >
             
              Register
            </Button>
            <NavLink 
            style={{textDecoration:'none'}}
            to="/login">
            <Button variant="text">already Register ? please Login</Button>
            </NavLink>
          </form>}
          {isLoading && <CircularProgress />}
          {user?.email && <Alert severity="success">User Created successfully !</Alert>
          }
          
          {authError && <Alert severity="error">{authError}</Alert>}
        </Grid>
        
        <Grid item xs={12} md={6}>
          <img src={login} alt="" style={{ width: "100%" }} />
        </Grid>
      </Grid>
    </Container>
    );
};

export default Register;