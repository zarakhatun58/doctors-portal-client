import { Container, Grid } from '@mui/material';
import React from 'react';
import { useState , useEffect} from 'react';
import Doctor from './../Home/Doctor/Doctor';

const Doctors = () => {
const [doctors, setDoctors]=useState([]);


useEffect( () =>{
fetch('https://thawing-forest-09797.herokuapp.com/doctors')
.then(res=>res.json())
.then(data=>setDoctors(data))


}, [])
    return (
        <div>
           <h4>Our Doctors:{doctors.length}</h4> 
           <Container>
           <Grid container spacing={2}>
           {
           doctors.map(doctor=> <Doctor key={doctor._id} doctor={doctor}></Doctor>)
           }
           </Grid>
           
           </Container>
        </div>
    );
};

export default Doctors;