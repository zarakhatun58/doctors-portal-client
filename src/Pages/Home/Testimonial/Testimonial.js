import React from "react";
import { Grid } from '@mui/material';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Skeleton from '@mui/material/Skeleton';
import people1 from '../../../images/people-1.png';
import people2 from '../../../images/people-2.png';
import people3 from '../../../images/people-3.png';


const Testimonial = (props) => {

    const { loading = false } = props;


  return (
  <> 
   <Grid container spacing={2}>
   <Grid item xs={2} sm={4} md={4} >
        <h4 color="#00bcd4"> Testimonial</h4>
        <h3>
          Whats Our Patients
          <br /> Says
        </h3>
        
      </Grid>
   
   </Grid>
     
   
     <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
    <Grid item xs={2} sm={4} md={4}>
    <Card sx={{ maxWidth: 345, m: 2 }}>
       
       <CardContent>
         {loading ? (
           <React.Fragment>
             <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
             <Skeleton animation="wave" height={10} width="80%" />
           </React.Fragment>
         ) : (
           <Typography variant="body2" color="text.secondary" component="p">
             {
               "He is a well known orthodontist who specializes in correcting misaligned teeth using braces made of metal or tooth colored material (ceramic). He is well versed with latest orthodontic techniques such as lingual braces and invisalign."
             }
           </Typography>
         )}
       </CardContent>
       <CardHeader
         avatar={
           loading ? (
             <Skeleton animation="wave" variant="circular" width={40} height={40} />
           ) : (
             <Avatar
               alt=""
               src={people1}
             />
           )
         }
         action={
           loading ? null : (
             <IconButton aria-label="settings">
               <MoreVertIcon />
             </IconButton>
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
             'Wilson Harry'
           )
         }
         subheader={
           loading ? (
             <Skeleton animation="wave" height={10} width="40%" />
           ) : (
             'California'
           )
         }
       />
     </Card>
    
    
    </Grid>
    <Grid item xs={2} sm={4} md={4}>
    <Card sx={{ maxWidth: 345, m: 2 }}>
      
    

      <CardContent>
        {loading ? (
          <React.Fragment>
            <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
            <Skeleton animation="wave" height={10} width="80%" />
          </React.Fragment>
        ) : (
          <Typography variant="body2" color="text.secondary" component="p">
            {
              "He is a well known orthodontist who specializes in correcting misaligned teeth using braces made of metal or tooth colored material (ceramic). He is well versed with latest orthodontic techniques such as lingual braces and invisalign."
            }
          </Typography>
        )}
      </CardContent>
      <CardHeader
        avatar={
          loading ? (
            <Skeleton animation="wave" variant="circular" width={40} height={40} />
          ) : (
            <Avatar
              alt=""
              src={people2}
            />
          )
        }
        action={
          loading ? null : (
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
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
            'Wilson Harry'
          )
        }
        subheader={
          loading ? (
            <Skeleton animation="wave" height={10} width="40%" />
          ) : (
            'California'
          )
        }
      />
    </Card>
    </Grid>
    <Grid item xs={2} sm={4} md={4}> 
    <Card sx={{ maxWidth: 345, m: 2 }}>
      
    

      <CardContent>
        {loading ? (
          <React.Fragment>
            <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
            <Skeleton animation="wave" height={10} width="80%" />
          </React.Fragment>
        ) : (
          <Typography variant="body2" color="text.secondary" component="p">
            {
              "He is a well known orthodontist who specializes in correcting misaligned teeth using braces made of metal or tooth colored material (ceramic). He is well versed with latest orthodontic techniques such as lingual braces and invisalign."
            }
          </Typography>
        )}
      </CardContent>
      <CardHeader
        avatar={
          loading ? (
            <Skeleton animation="wave" variant="circular" width={40} height={40} />
          ) : (
            <Avatar
              alt=""
              src={people3}
            />
          )
        }
        action={
          loading ? null : (
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
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
            'Wilson Harry'
          )
        }
        subheader={
          loading ? (
            <Skeleton animation="wave" height={10} width="40%" />
          ) : (
            'California'
          )
        }
      />
    </Card>
    
    </Grid>
   
    
   
    </Grid>
    </>
   
  );
};

Testimonial.propTypes = {
    loading: PropTypes.bool,
  };
export default Testimonial;

