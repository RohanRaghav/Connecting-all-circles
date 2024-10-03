import React from 'react';

const images = [
  '/IMG_1462.JPG',
  '/DSC07726.JPG',
  '/DSC_0100.JPG',
  '/DSC_0095.JPG',
  '/Greet.png',
  '/Boot.jpg',
  '/Creat.jpg',
  '/Create.jpg',
  '/C2.jpg',
  '/DSC07586.jpg',
  '/Grret.jpg',
];

const Slider = () => {
  return (
    <div className="slider-container">
      {/* Slider 1: Left to Right */}
      <div className="slider left-to-right">
        <div className="slider-track">
          {images.map((src, index) => (
            <img key={index} src={src} alt={`image-${index}`} className="slider-image" />
          ))}
        </div>
      </div>

      {/* Slider 2: Right to Left */}
      <div className="slider right-to-left">
        <div className="slider-track">
          {images.map((src, index) => (
            <img key={index} src={src} alt={`image-${index}`} className="slider-image" />
          ))}
        </div>
      </div>

      {/* Slider 3: Left */}
      <div className="slider left">
        <div className="slider-track">
          {images.map((src, index) => (
            <img key={index} src={src} alt={`image-${index}`} className="slider-image" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;