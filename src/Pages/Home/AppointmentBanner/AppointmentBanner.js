import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography, Button } from "@mui/material";
import doctor from "../../../images/doctor.png";
import bg from "../../../images/appointment-bg.png";

const appointmentBanner = {
  background: `url(${bg})`,
  backgroundColor: "rgba(33, 47, 60)",
  backgroundBlendMode: "darken, luminosity",
  marginTop: 175,
};

const AppointmentBanner = () => {
  return (
    <div>
      <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <img
              style={{ width: 400, marginTop: "-120px" }}
              src={doctor}
              alt=""
            />
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            style={{
              display: "flex",
              justifyContent: "flex-start",
              textAlign: "left",
              alignItems:'center'
            }}
          >
            <Box>
              <Typography variant="h6" sx={{mb:3}} style={{ color: "#148759" }}>
                Appointment
              </Typography>
              <Typography variant="h4" sx={{mb:3}} style={{ color: "white",  }}>
                {" "}
                Make an Appointment Today{" "}
              </Typography>
              <Typography
                variant="p"
                
                style={{ color: "white", fontSize: "15" }} 
              >
                Schedule an Appointment with leading specialist doctors at
                Apollo Hospitals. Hassle Free Hospital Appointment with world
                class patient care facility. 24/7 Emergency Service.
              </Typography>
              <Button variant="contained"   sx={{mt:5}} style={{ backgroundColor: "#148759" }}> Learn More</Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default AppointmentBanner;
