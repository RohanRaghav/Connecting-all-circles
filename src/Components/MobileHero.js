import React, { useState, useEffect, useRef } from 'react';
import Navbar from './Navbar'
import MobileEvent from './MobileEvent';
import MobileTeam from './MobileTeam';
import Stackcard from './Stackcard';
import Slider from './Slider';
import Join from './Join';
import MobileJoin from './MobileJoin';
const Headline = ({ text }) => {
  const typingAnimationElement = useRef(null);

  useEffect(() => {
    typingAnimationElement.current.textContent = '';

    for (let i = 0; i < text.length; i++) {
      setTimeout(() => {
        if (typingAnimationElement.current) {
          typingAnimationElement.current.textContent += text[i];
        }
      }, i * 200); // Typing speed (200ms per character)
    }
  }, [text]);

  return (
    <h1 ref={typingAnimationElement} className="abc" style={{ fontSize: '2rem', color: 'white' }}></h1>
  );
};
const MobileHero = () => {
  const head = ['Events', 'Competition', 'Podcasts'];
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const images = [
    { src: '/Frame 49.png', alt: 'Image 1', link: 'https://www.instagram.com/cac.cuchd/' },
    { src: '/Frame 49-2.png', alt: 'Image 2', link: 'https://www.instagram.com/cac.cuchd/' },
    { src: '/pod.jpg', alt: 'Image 3', link: 'https://www.youtube.com/@insightuniverse.official' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div style={{overflowX:'hidden'}}>
        <div className='mobile-nav'>
            <img className='logos' src='Cac_logo.png' alt='logo' />
            <Navbar />
      </div>
      <div className='mobile-back-hero'></div>
      <div className='mobile-hero'>
      <video src='/back1.mp4' className="background-video" autoPlay loop muted />
        <h1 className='mobile-title'>
        Create Memories<br />of<br />lifetime</h1>
      </div>
      <div className='Mobile-event'>
      <Headline text={head[currentIndex]} />
      </div>
      <div className="image-slider-container" style={{ overflow: 'hidden', width: '80vh', display: 'flex', flexDirection: 'row', alignContent: 'center',padding:'50px',marginTop:'-10px' }}>
        <div
          className="image-slider"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: 'transform 0.5s ease-in-out',
            display: 'flex',
            flexDirection: 'row',
            margin:'0 auto',
            width: '100%',
          }}
        >
          {images.map((image, index) => (
            <a href={image.link} key={index} className="slider-image-wrapper" style={{ flex: '0 0 100%' }}>
              <img
                src={image.src}
                alt={image.alt}
                className="slider-image"
                style={{ width: '40vh', height: '25vh', borderRadius: '20px', margin: '0 auto', }}
              />
            </a>
          ))}
        </div>
      </div>
      <MobileEvent />
      <MobileTeam />
      <Stackcard />
      <Slider />
      <MobileJoin />
    </div>
  )
}

export default MobileHero
