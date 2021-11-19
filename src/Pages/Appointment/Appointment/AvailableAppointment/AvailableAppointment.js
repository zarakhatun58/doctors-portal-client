import React from "react";
import Grid from "@mui/material/Grid";
import Booking from "../../Booking/Booking";
import { Typography } from "@mui/material";

const bookings = [
  {
    id: 1,
    name: "Oral Surgery",
    time: "06:00 PM - 08:00 PM",
    price:25,
    space: 10,
  },
  {
    id: 2,
    name: "Pediatric Dental",
    time: "07:00 PM - 08:00 PM",
    price:36,
    space: 5,
  },
  {
    id: 3,
    name: "Cavity Protection",
    time: "08:00 PM - 09:00 PM",
    price:40,
    space: 10,
  },
  {
    id: 4,
    name: "Teeth Orthodontic",
    time: "08:00 AM - 09:00 AM",
    price:20,
    space: 20,
  },
  {
    id: 5,
    name: "Cosmetics Dentistry",
    time: "11:00 AM - 01:00 PM",
    price:25,
    space: 10,
  },
  {
    id: 6,
    name: "Teeth Cleaning",
    time: "02:00 PM - 04:00 PM",
    price:25,
    space: 15,
  },
];

const AvailableAppointment = ({ date }) => {
  return (
    <div>
      <Typography variant="h4" sx={{ color: 'success.main', fontWeight:600, mb:2, mt:3 }}>
      Available Appointments on {date.toDateString()} </Typography>
      <Grid container spacing={2}>
        {
        bookings.map(booking =><Booking key={booking.id}
        booking={booking}
        date={date}
        ></Booking>)
        }
      </Grid>
    </div>
  );
};

export default AvailableAppointment;
