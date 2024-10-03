import React, { useState, useEffect } from 'react';

const Cuboid = ({ cards }) => {
  const [rotationY, setRotationY] = useState(0);
  const [rotationX, setRotationX] = useState(0);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    let autoRotate;
    if (!scrolling) {
      autoRotate = setInterval(() => {
        setRotationY(prevRotation => prevRotation + 90); // Rotate 90 degrees horizontally
      }, 3000); // Change every 3 seconds
    }
    
    return () => clearInterval(autoRotate);
  }, [scrolling]);

  const handleScroll = (event) => {
    setScrolling(true);
    const deltaY = event.deltaY;
    const deltaX = event.deltaX;

    if (deltaY > 0) {
      rotateDown();
    } else if (deltaY < 0) {
      rotateUp();
    }

    if (deltaX > 0) {
      rotateRight();
    } else if (deltaX < 0) {
      rotateLeft();
    }

    setTimeout(() => setScrolling(false), 1000); // Stop auto-rotation for 1 second on scroll
  };

  const rotateLeft = () => setRotationY(rotationY - 90);
  const rotateRight = () => setRotationY(rotationY + 90);
  const rotateUp = () => setRotationX(rotationX - 90);
  const rotateDown = () => setRotationX(rotationX + 90);

  useEffect(() => {
    window.addEventListener('wheel', handleScroll);

    return () => window.removeEventListener('wheel', handleScroll);
  }, [rotationX, rotationY]);

  return (
    <>
      <div className="cuboid-container">
        <div
          className="cuboid"
          style={{
            transform: `rotateY(${rotationY}deg) rotateX(${rotationX}deg)`
          }}
        >
          {cards.map((card, index) => (
            <div key={index} className={`cuboid-face face-${index + 1}`}>
              <img src={card.image} alt={`Card ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      <div>
        <button onClick={rotateLeft} style={{ color: 'white' }}>Rotate Left</button>
        <button onClick={rotateRight} style={{ color: 'white' }}>Rotate Right</button>
        <button onClick={rotateUp} style={{ color: 'white' }}>Rotate Up</button>
        <button onClick={rotateDown} style={{ color: 'white' }}>Rotate Down</button>
      </div>
    </>
  );
};

export default Cuboid;
