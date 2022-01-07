import React from 'react';
import About from '../About/About';
import DisplayReview from '../DisplayReview/DisplayReview';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import VideoBanner from '../videoBanner/videoBanner';
import Services from '../Services/Services';
import FAQ from '../FAQ/FAQ';
import Map from "../Map/Map";
// import Products from '../Products/Products';


const Home = () => {
    return (
        <div>
            
             <Banner></Banner>
            <br />
            <VideoBanner></VideoBanner>
            <br />
            <About></About>
            <br />
             <Services></Services>
            <br /> 
             <FAQ></FAQ>
            <br /> 
            <DisplayReview></DisplayReview>
            <br /> 
            <Contact></Contact>
            <br/>
            <Map></Map>
        </div>
    );
};

export default Home;