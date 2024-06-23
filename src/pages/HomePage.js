import React from 'react';
import MissionSec from '../sections/MissionSec';
import AboutSec from '../sections/AboutSec';
import ServiceSec from '../sections/ServiceSec';
import SupportSec from '../sections/SupportSec';
import HeroSec from '../sections/HeroSec';

const HomePage = () => {
    return (
        <>
            <HeroSec />
            <MissionSec />
            <AboutSec />
            <ServiceSec />
            <SupportSec />
        </>
    );
};

export default HomePage;