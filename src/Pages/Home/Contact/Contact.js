import { Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import './Contact.css'


const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => console.log(data);
  return (
    <div className="bgImg">
    <Typography sx={{marginTop:'50px', color:'#00bcd4'}} variant="h6" component="div"> CONTACT US </Typography>
    <Typography variant="h6" component="div">Always Connect With Us</Typography>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('Name')} /> <br/><br/>
      <input {...register('email', { required: true })} /><br/><br/>
    
      <textarea {...register('text', { pattern: /\d+/ })} /><br/><br/>
     
      <input type="submit" className="color:#00bcd4" />
    </form>
      
    </div>
  );
};

export default Contact;
