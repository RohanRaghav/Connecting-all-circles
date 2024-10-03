import React from 'react';

const Cards = ({ backgroundImage, link }) => {
  return (
    <div
      className="card-container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="card-content">
        <a href={link} className="card-link" target="_blank" rel="noopener noreferrer">
          Read more
        </a>
      </div>
    </div>
  );
};

export default Cards;
