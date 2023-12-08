import React, { useContext } from 'react';
import Hero from './hero/Hero';
import Headerr from '../common/header/Headerr';
import Featured from './featured/Featured';
import Recent from './recent/Recent';
import Awards from './awards/Awards';
import Location from './location/Location';
import Team from './team/Team';
import Price from './price/Price';
import Footer from '../common/footer/Footer';
import Faqs from './faq/Faqs';

const Home = () => {
    
    return (
        <>
            <Headerr/>
            <Hero/>  
            <Featured/>  
            <Recent/>  
            <Awards/>  
            <Faqs/>  
            <Location/>  
            <Team/>  
            <Price/>  
            <Footer/>  
        </>
    );
};

export default Home;