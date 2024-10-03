import React, { useState, useEffect, useRef } from 'react';

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

const CardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false); // State to track if it's mobile view

  const head = ['Events', 'Competition', 'Podcasts'];

  const images = [
    { src: '/Frame 49.png', alt: 'Image 1', link: '#link1' },
    { src: '/Frame 49-2.png', alt: 'Image 2', link: '#link2' },
    { src: '/pod.jpg', alt: 'Image 3', link: '#link3' },
  ];

  useEffect(() => {
    const handleResize = () => {
      // Check if the screen width is less than 768px (mobile screen)
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    handleResize();

    // Add resize listener to update on window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  // If it's mobile, do not render the component
  if (isMobile) {
    return null;
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {/* Headline Section */}
      <div className="headline-container" style={{ marginRight: '40px', alignContent: 'center' }}>
        <Headline text={head[currentIndex]} />
      </div>

      {/* Image Slider */}
      <div className="image-slider-container" style={{ overflow: 'hidden', width: '100vh', height: '50vh', display: 'flex', flexDirection: 'row', alignContent: 'center' }}>
        <div
          className="image-slider"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: 'transform 0.5s ease-in-out',
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
          }}
        >
          {images.map((image, index) => (
            <a href={image.link} key={index} className="slider-image-wrapper" style={{ flex: '0 0 100%' }}>
              <img
                src={image.src}
                alt={image.alt}
                className="slider-image"
                style={{ width: '80vh', height: '45vh', borderRadius: '20px' }}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardSlider;
