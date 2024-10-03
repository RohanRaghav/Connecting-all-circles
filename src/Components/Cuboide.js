import React, { useState, useEffect } from 'react';

const Cuboide = ({ cards }) => {
  const [rotationX, setRotationX] = useState(0);

  // Adjust these constants to change the speed of scrolling and button rotations
  const scrollIncrement = 2;  // Smaller increment for scrolling
  const buttonIncrement = 90; // Larger increment for buttons

  const handleScroll = (event) => {
    const cuboidElement = document.querySelector('.cuboid-container');
    const cuboidRect = cuboidElement.getBoundingClientRect();

    const isOverCuboid =
      event.clientX >= cuboidRect.left &&
      event.clientX <= cuboidRect.right &&
      event.clientY >= cuboidRect.top &&
      event.clientY <= cuboidRect.bottom;

    if (isOverCuboid) {
      // Prevent default scrolling behavior when over the cuboid
      event.preventDefault();

      const deltaY = event.deltaY;
      if (deltaY > 0) {
        rotateDown(scrollIncrement);
      } else if (deltaY < 0) {
        rotateUp(scrollIncrement);
      }
    }
  };

  const rotateUp = (increment) => {
    setRotationX(prevRotation => prevRotation - increment);
  };

  const rotateDown = (increment) => {
    setRotationX(prevRotation => prevRotation + increment);
  };

  const rotateUpButton = () => {
    rotateUp(buttonIncrement);
  };

  const rotateDownButton = () => {
    rotateDown(buttonIncrement);
  };

  useEffect(() => {
    window.addEventListener('wheel', handleScroll, { passive: false });

    return () => window.removeEventListener('wheel', handleScroll);
  }, []);

  return (
    <div style={{ display: 'flex', alignItems: 'center',paddingTop:200 }}>
      {/* Buttons Container */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', left:300,position:'relative' }}>
        <button onClick={rotateUpButton} style={{ marginBottom: '10px', color: 'white' }}></button>
        <button onClick={rotateDownButton} style={{ color: 'white' }}></button>
      </div>

      {/* Cuboid Container */}
      <div className="cuboid-container" style={{ perspective: '1000px' }}>
        <div
          className="cuboid"
          style={{
            transform: `rotateX(${rotationX}deg)`,
            transition: 'transform 1s ease',
            transformStyle: 'preserve-3d',
          }}
        >
          {cards.map((card, index) => (
            <div key={index} className={`cuboid-face face-${index + 1}`}>
              <img src={card.image} alt={`Card ${index + 1}`} className={`face-image-${index + 1}`} />
              <div>
                <h1 className='paracolor'>{card.headline}</h1>
                <p className='paracolor'>{card.describe}</p>
                <p className='paracolor'>{card.post}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Cuboide;
