import React from "react";
import useAuth from '../../../hooks/useAuth';
import CircularProgress from '@mui/material/CircularProgress';
import { useLocation,Navigate } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  let location = useLocation();
  if(isLoading){
  return <CircularProgress />
  }
  //
  if(user.email){
  return children;
  }
  
   return (
     <Navigate to="/login" state={{from :location}}/>
  );
  
  
};

export default PrivateRoute;

//<Route
  //     {...rest}
  //     render={({ location }) =>
  //       user.email ? (
  //         children
  //       ) : (
  //         <Redirect
  //           to={{
  //             pathname: "/login",
  //             state: { from: location },
  //           }}
  //         />
  //       )
  //     }
  //   />
