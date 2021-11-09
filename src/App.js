import React from "react";
import {BrowserRouter as  Router, Route, Switch} from 'react-router-dom'

import './App.css';
import AuthProvider from "./context/AuthProvider/AuthProvider";
import Appointment from "./Pages/Appointment/Appointment/Appointment";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Register from "./Pages/Login/Register/Register";

function App() {
  return (
    <div className="App">
     <AuthProvider>
     <Router>
      <Switch>
          <PrivateRoute path="/appointment">
            <Appointment />
          </PrivateRoute>
          <Route path="/home">
            <Home/>
          </Route>
          <Route exact path="/login">
           <Login></Login>
          </Route>
          <Route  path="/register">
          <Register></Register>
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
     
     </AuthProvider>
      
    </div>
  );
}

export default App;
