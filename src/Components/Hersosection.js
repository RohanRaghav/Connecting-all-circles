import React, { useEffect } from 'react';
import CardSlider from './CardSlider';
import Represent from './Represent';
import Eventing from './Eventing';
import Stackcard from './Stackcard';
import Slider from './Slider';
import Join from './Join';

const Herosesection = () => {
  useEffect(() => {
    const connectingText = document.querySelector('.connecting');
    const exampleText = document.querySelector('.example');
    const videoElement = document.querySelector('.background-video');

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scaleFactorConnecting = Math.max(2 - scrollPosition / 1000, 1); // Scale down as you scroll
      const scaleFactorExample = Math.min(0.9 + scrollPosition / 1000, 3); // Scale up as you scroll

      connectingText.style.transform = `scale(${scaleFactorConnecting})`;
      exampleText.style.transform = `scale(${scaleFactorExample})`;

      // Adjust the video opacity based on scroll position
      const cardSectionStart = 800; // Adjust this value based on where your card section starts
      const maxOpacityScroll = 1600; // Scroll position where the video is fully darkened

      if (scrollPosition >= cardSectionStart) {
        const opacity = Math.max(2 - (scrollPosition - cardSectionStart) / (maxOpacityScroll - cardSectionStart), 0);
        videoElement.style.opacity = opacity;
      } else {
        videoElement.style.opacity = 1;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="hero-section">
        {/* Background Video */}
        <video src='/back.mp4' className="background-video" autoPlay loop muted />

        {/* Text with Mix-Blend-Mode */}
        <div className="blended-text">
        Create memories of a lifetime
        </div>
      </div>

      <div className="connecting">
       WITH
      </div>

      <div className="example">
        Connecting all circles
      </div>
        <div className='card'>
          <CardSlider />
        </div>
        <Eventing />
        {/* <Events /> */}
    <Represent />
    <Stackcard />
    <Slider />
    <Join />
    </div>
  );
};

export default Herosesection;
