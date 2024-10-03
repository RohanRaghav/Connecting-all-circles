import React, { useState, useEffect } from 'react';

const Cuboids = ({ cards }) => {
  const [rotationX, setRotationX] = useState(0);

  const handleScroll = (event) => {
    const deltaY = event.deltaY;

    if (deltaY > 0) {
      rotateDown();
    } else if (deltaY < 0) {
      rotateUp();
    }
  };

  const rotateUp = () => setRotationX(prevRotation => prevRotation - 5);
  const rotateDown = () => setRotationX(prevRotation => prevRotation + 5);

  useEffect(() => {
    window.addEventListener('wheel', handleScroll);

    return () => window.removeEventListener('wheel', handleScroll);
  }, []);

  return (
    <>
      <div className="cuboid-container">
        <div
          className="cuboid"
          style={{
            transform: `rotateX(${rotationX}deg)`
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
        <button onClick={rotateUp} style={{ color: 'white' }}>Rotate Up</button>
        <button onClick={rotateDown} style={{ color: 'white' }}>Rotate Down</button>
      </div>
    </>
  );
};

export default Cuboids;
