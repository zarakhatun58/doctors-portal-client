import {
  Card,
  CardContent,
  CardMedia,
  Grid,
 
  Typography,
} from "@mui/material";

import React from "react";

const OurDoctors = () => {
  return (
    <div>
      <Typography
        variant="title"
        color="#00bcd4"
        component="h1"
        marginTop="20px"
      >
        {"Our Doctors "}
      </Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={2} sm={4} md={4}>
          <Card sx={{ maxWidth: 345, marginTop: "70px" }}>
            <CardMedia
              component="img"
              alt=""
              height="310"
              image="https://i.ibb.co/hKvkJKX/doctor-small.png"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Dr. Coudi
              </Typography>
              <Typography variant="body2" color="#00bcd4">
                <span>
                 
                  <i class="fas fa-phone-alt"></i> <h3> +91 80012512856</h3>
                </span>
             
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Card sx={{ maxWidth: 345, marginTop: "70px" }}>
            <CardMedia
              component="img"
              alt=""
              height="310"
              image="https://i.ibb.co/hKvkJKX/doctor-small.png"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Dr. Coudi
              </Typography>
              <Typography variant="body2" color="text.secondary">
                +91 80012512856
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Card sx={{ maxWidth: 345, marginTop: "70px" }}>
            <CardMedia
              component="img"
              alt=""
              height="310"
              image="https://i.ibb.co/hKvkJKX/doctor-small.png"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Dr. Coudi
              </Typography>
              <Typography variant="body2" color="text.secondary">
                +91 80012512856
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default OurDoctors;
