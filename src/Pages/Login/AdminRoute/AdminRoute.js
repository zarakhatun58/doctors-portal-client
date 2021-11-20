import React from "react";
import {useLocation, Navigate } from "react-router-dom";

import CircularProgress from '@mui/material/CircularProgress';
import useAuth from './../../../hooks/useAuth';


const AdminRoute = ({ children, ...rest }) => {
    const { user, admin, isLoading } = useAuth();
    let location = useLocation();

    
    if (isLoading) { return <CircularProgress /> }
    
    if(user.email && admin){
    return children
    }
    return <Navigate to="/login" state={{from :location}}/>
    
    
       
   
};

export default AdminRoute;

/* version 5
return (
<Route
            {...rest}
            render={({ location }) =>
                user.email && admin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
 );
*/
