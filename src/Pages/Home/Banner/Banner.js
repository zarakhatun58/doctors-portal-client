import React from "react";
import chair from "../../../images/chair.png";
import bg from "../../../images/bg.png";
import Grid from "@mui/material/Grid";
import { Button, Typography, Container, Box } from "@mui/material";

const bannerBg = {
  background: `url(${bg})`,
};

const verticalCenter = {
  display: "flex",
  alignItems: "center",
  
  height: 400,
};

const Banner = () => {
  return (
    <Container style={bannerBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid style={{...verticalCenter ,textAlign:'left'}} item xs={12} md={6}>
          <Box>
            <Typography variant="h3">Your New Smile <br/> Starts Here </Typography>

            <Typography
              variant="h6"
              sx={{ fontSize: 14, color: "gray", fontWeight: 300 }}
            >
              Smiles.ai is a multi-specialty dental clinic and implant centre
              with leading dentists offering expert dental care. Root canal.
              Dental Implants.We are prepared to keep you safe while helping you get a Happy Healthy Smile.
            </Typography>

            <Button variant="contained" style={{ backgroundColor: "#5CE7ED" }}>
              {" "}
              Get appointment
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} style={verticalCenter}>
          <img style={{ width: '350px' }} src={chair} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
