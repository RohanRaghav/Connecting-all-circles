import React from 'react';
import { useMediaQuery } from 'react-responsive';
import MobileHero from './MobileHero';
import Herosesection from './Hersosection';

const Hero = () => {
  // Define a media query for mobile devices (typically screens less than 768px wide)
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <div>
      {isMobile ? <MobileHero /> : <Herosesection />}
    </div>
  );
};

export default Hero;
