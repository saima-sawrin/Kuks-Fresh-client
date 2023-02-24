import React from 'react';
import Banner from '../../Component/Banner/Banner';
import Cook from '../../Component/Cook/Cook';
import Explore from '../../Component/Explore/Explore';
import Hero from '../../Component/Hero/Hero';
import Services from '../../Component/Services/Services';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Services></Services>
            <Explore></Explore>
            <Cook></Cook>
            <Banner></Banner>
          
        </div>
    );
};

export default Home;