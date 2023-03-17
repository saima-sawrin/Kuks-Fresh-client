import React from 'react';
import Banner from '../../Component/Banner/Banner';
import Contact from '../../Component/Contact/Contact';
import Cook from '../../Component/Cook/Cook';
import Explore from '../../Component/Explore/Explore';
import Feature from '../../Component/Feature/Feature';
import Hero from '../../Component/Hero/Hero';
import Services from '../../Component/Services/Services';
import State from '../../Component/State/State';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Services></Services>
            <Explore></Explore>
              <Contact></Contact>
            <Cook></Cook>
          <Feature></Feature>
            <Banner></Banner>
          
        </div>
    );
};

export default Home;