import React from 'react';
import Navigation from '../Shared/Navigation/Navigation';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import Banner from './Banner/Banner';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';
import Blog from './Blog/Blog';
import OurDoctors from './OurDoctors/OurDoctors';
import Contact from './Contact/Contact';

const Home = () => {
    return (
        <div>
           <Navigation></Navigation>
           <Banner></Banner>
           <Services></Services>
           <AppointmentBanner></AppointmentBanner>
           <Testimonial></Testimonial>
           <Blog></Blog>
           <OurDoctors></OurDoctors>
           <Contact></Contact>
        </div>
        
        
        
    );
};

export default Home;