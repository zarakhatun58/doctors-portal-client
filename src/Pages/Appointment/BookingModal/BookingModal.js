import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


const BookingModal = ({openBooking, handleBookingClose, booking,date}) => {

    const {name, time}=booking;
    const {user}= useAuth();
    const initialInfo={patientName:user.displayName, email:user.email, phone:''}
    const [bookingInfo, setBookingInfo]=useState(initialInfo)
    
    const handleOnBlur=(e)=>{
    const field =e.target.name;
    const value =e.target.value;
    const newInfo={...bookingInfo};
    newInfo[field]=value;
    console.log(newInfo);
    setBookingInfo(newInfo);
    
    }
    
    
    const handleBookSubmit=e =>{
    const appointment={
    ...bookingInfo,
    time,
    serviceName:name,
    date:date.toLocalDateString()
    
    
    }
    console.log(appointment);

// send to the server
fetch('http://localhost:5000/appointment', {
method:'POST',
headers:{ 
'content-type':'application/json'
},
body:JSON.stringify(appointment)

})
.then(res=>res.json())
.then(data =>{
console.log(data)
})
    
    // collect data from format// send the server
    
    handleBookingClose();
    e.preventDefault();
    }
    return (
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openBooking}
        onClose={handleBookingClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openBooking}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
            {name}
            </Typography>
            <form onSubmit={handleBookSubmit}>
            
            <TextField
          disabled
          sx={{width:'90%'}}
          id="outlined-size-small"
          defaultValue={time}
          size="small"
        />
            <TextField
         
          sx={{width:'90%'}}
          id="outlined-size-small"
          name=" patient name"
          onBlur={handleOnBlur}
          defaultValue={user.displayName}
          size="small"
        />
            <TextField
         
          sx={{width:'90%'}}
          id="outlined-size-small"
          name="email"
          onBlur={handleOnBlur}

          defaultValue={user.email}
          size="small"
        />
            <TextField
         
          sx={{width:'90%'}}
          id="outlined-size-small"
          name="phone"
          onBlur={handleOnBlur}
          defaultValue="Phone Number"
          size="small"
        />
            
            <TextField
         disabled
          sx={{width:'90%'}}
          id="outlined-size-small"
          defaultValue={date.toDateString()}
          size="small"
        />
          <Button variant="contained" type="submit"> Book </Button>
  
            </form>
          </Box>
        </Fade>
      </Modal>
    );
};

export default BookingModal;