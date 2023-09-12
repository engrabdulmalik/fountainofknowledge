

import React, { useState, useEffect } from 'react';
import f1 from "../pictures/FULL.png"
import f2 from "../pictures/FULL2.png"
import f3 from "../pictures/full3.png"
import "../slider/slide.css"
const Slideshow = () => {
  
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    f1,
    f2,
    f3,
  ];

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 4000); // Auto-transition every 3 seconds

    return () => {
      clearInterval(interval); // Cleanup interval on unmount
    };
  }, [currentImage]);

  return (
    <div className="slideshow">
      <button onClick={prevImage} className="arrow left-arrow">&#10094;</button>
      <img src={images[currentImage]} alt={`Image ${currentImage + 1}`} />
      <button onClick={nextImage} className="arrow right-arrow">&#10095;</button>
    </div>
  );
  };
  


export default Slideshow;