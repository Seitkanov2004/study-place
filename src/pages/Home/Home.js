import React from 'react';
import Follow from "./Follow/Follow";
import Hero from "./Hero/Hero"
import Staty from './Staty/Staty';

const Home = () => {
    return (
        <div>
            <Hero/>
            <Staty/>
            <Follow/>
        </div>
    );
};

export default Home;