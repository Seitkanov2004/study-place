import React from 'react';
import Hero from "./Hero/Hero";
import Accardeon from "./Accardeon/Accardeon";
import Follow from "./Follow/Follow";
import Hero from "./Hero/Hero"
import Staty from './Staty/Staty';

const Home = () => {
    return (
        <div>
           <Hero/>
            <Accardeon/>
            <Hero/>
            <Staty/>
            <Follow/>
        </div>
    );
};

export default Home;