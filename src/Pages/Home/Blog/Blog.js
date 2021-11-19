import React from "react";
import {  Grid } from "@mui/material";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import people1 from "../../../images/people-1.png";
import people3 from "../../../images/people-3.png";


const Blog = (props) => {
  const { loading = false } = props;
  return (
    <div>
      <Typography variant="title" color="#00bcd4" component="h1">
        {" Our Blog "}
       
      </Typography>
      <h3>From Our Blog News</h3>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={2} sm={4} md={4}>
          <Card sx={{ maxWidth: 250, m:2, border: 1 ,height: '75%', color:'#b2ebf2', backgroundColor:'#4dd0e1' }}>
            <CardContent>
           <Typography variant="body2" color="text.light" component="p" sx={{ m:2}}>
           Rasheed Kabir<br/>
           15th nov 2021
           </Typography>
           
              <Typography variant="body2" color="text.light" component="h4">
               "Check at Least a Doctor in a Year for your teeth"
              </Typography>
            
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Card sx={{ maxWidth: 345, m: 2 }}>
            <CardHeader
              avatar={
                loading ? (
                  <Skeleton
                    animation="wave"
                    variant="circular"
                    width={40}
                    height={40}
                  />
                ) : (
                  <Avatar alt="" src={people1} />
                )
              }
              title={
                loading ? (
                  <Skeleton
                    animation="wave"
                    height={10}
                    width="80%"
                    style={{ marginBottom: 6 }}
                  />
                ) : (
                  "Wilson Harry"
                )
              }
              subheader={
                loading ? (
                  <Skeleton animation="wave" height={10} width="40%" />
                ) : (
                  "14th November 2021"
                )
              }
            />

            <CardContent>
              <Typography variant="body2" color="text.dark" component="p">
                "The Tooth Cancer is taking a <br/> Challenged "
              </Typography>
            </CardContent>
            <CardContent>
              <Typography variant="body2" color="text.secondary" component="p">
                "It is a long established fact that by the readable content of a
                lot layout the point ."
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Card sx={{ maxWidth: 345, m: 2 }}>
            <CardHeader
              avatar={
                loading ? (
                  <Skeleton
                    animation="wave"
                    variant="circular"
                    width={40}
                    height={40}
                  />
                ) : (
                  <Avatar alt="" src={people3} />
                )
              }
              title={
                loading ? (
                  <Skeleton
                    animation="wave"
                    height={10}
                    width="80%"
                    style={{ marginBottom: 6 }}
                  />
                ) : (
                  "Wilson Harry"
                )
              }
              subheader={
                loading ? (
                  <Skeleton animation="wave" height={10} width="40%" />
                ) : (
                  "15th November 2021"
                )
              }
            />

            <CardContent>
              <Typography variant="body2" color="text.dark" component="h4">
                "Two Times a Brush in a day can <br />
                keep you healthy "
              </Typography>
            </CardContent>

            <CardContent>
              <Typography variant="body2" color="text.secondary" component="h4">
                "It is a long established fact that by the readable content of a
                lot layout the point"
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

Blog.propTypes = {
  loading: PropTypes.bool,
};

export default Blog;
