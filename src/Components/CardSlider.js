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
  const [cycleCount, setCycleCount] = useState(0); // Track how many times the slider has cycled
  const [isVisible, setIsVisible] = useState(false); // Track if component is visible
  const [isMobile, setIsMobile] = useState(false); // Track if it's mobile view
  const sliderRef = useRef(null); // Ref for the slider component

  const head = ['Events', 'Competition', 'Podcasts'];

  const images = [
    { src: '/Frame 49.png', alt: 'Image 1', link: '#link1' },
    { src: '/Frame 49-2.png', alt: 'Image 2', link: '#link2' },
    { src: '/pod.jpg', alt: 'Image 3', link: '#link3' },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Check if screen width is less than 768px
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize); // Add resize listener

    return () => window.removeEventListener('resize', handleResize); // Cleanup on unmount
  }, []);

  // Intersection Observer to detect visibility of the component
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting); // Set visibility when component enters the viewport
      },
      {
        root: null, // Use the viewport as the root
        threshold: 0.1, // Trigger when 10% of the component is visible
      }
    );

    if (sliderRef.current) {
      observer.observe(sliderRef.current);
    }

    return () => {
      if (sliderRef.current) {
        observer.unobserve(sliderRef.current);
      }
    };
  }, []);

  // Slider effect only when component is visible
  useEffect(() => {
    let interval;
    if (isVisible && cycleCount < 1) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          if (prevIndex === images.length - 1) {
            setCycleCount(cycleCount + 1); // Increment cycle count when all images are shown
          }
          return (prevIndex + 1) % images.length;
        });
      }, 5000);
    }

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [isVisible, currentIndex, cycleCount, images.length]);

  if (isMobile) {
    return null; // If mobile view, do not render the component
  }

  return (
    <div ref={sliderRef} style={{ display: 'flex', justifyContent: 'center' }}>
      <div className="event-title">
        <h1 className="mobile-title">Our Services</h1>

        {/* If the cycle is completed, show all images in a row */}
        {cycleCount >= 1 ? (
          <div
            className="image-grid"
            style={{
              display: 'flex',
              width:'150vh',
              justifyContent: 'center',
              gap: '20px', // Add space between the images
            }}
          >
            {images.map((image, index) => (
              <a href={image.link} key={index} className="image-wrapper">
                <img
                  src={image.src}
                  alt={image.alt}
                  style={{ width: '50vh', height: '35vh', borderRadius: '20px' }}
                />
              </a>
            ))}
          </div>
        ) : (
          // Slider display before the cycle is complete
          <div className="headline-container" style={{ marginRight: '40px', alignContent: 'center', display: 'flex', flexDirection: 'row' }}>
            <div style={{ position: 'absolute', top: '75%' }}>
              <Headline text={head[currentIndex]} />
            </div>

            {/* Image Slider */}
            <div
              className="image-slider-container"
              style={{
                overflow: 'hidden',
                width: '100vh',
                height: '50vh',
                display: 'flex',
                flexDirection: 'row',
                alignContent: 'center',
                marginLeft: '200px',
              }}
            >
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
        )}
      </div>
    </div>
  );
};

export default CardSlider;
