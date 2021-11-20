import React from "react";
import {BrowserRouter as  Router, Route, Routes} from 'react-router-dom'

import AuthProvider from "./context/AuthProvider/AuthProvider";
import Appointment from "./Pages/Appointment/Appointment/Appointment";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Register from "./Pages/Login/Register/Register";
import DashboardHome from './Pages/Dashboard/DashboardHome/DashboardHome';
import Payment from './Pages/Dashboard/Payment/Payment';
import AdminRoute from './Pages/Login/AdminRoute/AdminRoute';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import AddDoctor from './Pages/Dashboard/AddDoctor/AddDoctor';

function App() {
  return (
    <div>
     <AuthProvider>
     <Router>
      <Routes>
          <Route path="/appointment" element={<PrivateRoute><Appointment/> </PrivateRoute>}>
           
          </Route>
          <Route path="/dashboard" element={<PrivateRoute> <Dashboard /> </PrivateRoute>}>
          
          <Route exact path="/dashboard" element={ <DashboardHome/>}>
                       
                    </Route>
                    <Route path={`/dashboard/payment/:appointmentId`}  element={ <Payment/>}>
                       
                    </Route>
                    
                    <Route path={`/dashboard/makeAdmin`} 
                    element={<AdminRoute> <MakeAdmin></MakeAdmin> </AdminRoute>}>
                       
                    </Route>
                    <Route path={`/dashboard/addDoctor`}
                    element={<AdminRoute>  <AddDoctor/> </AdminRoute>}>
                       
                    </Route>
           
          </Route>
          <Route path="/home"  element={<Home/>}>
           
          </Route>
          <Route exact path="/login" element={<Login/>}>
         
          </Route>
          <Route  path="/register"   element={<Register/>}>
         
          </Route>

          <Route path="/"  element={<Home/>}>

          </Route>
        </Routes>
      </Router>
     
     </AuthProvider>
      
    </div>
  );
}

export default App;
