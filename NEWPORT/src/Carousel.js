// Carousel.js
import React, { useRef } from "react";
import "./Carousel.css";
import ArrowButton from "./ArrowButton"; // Import the ArrowButton component

const Carousel = ({ children }) => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft -= 300; // Adjust the scroll distance as needed
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += 300; // Adjust the scroll distance as needed
    }
  };

  return (
    <div>
      <div className="arrows">
        {/* Arrow buttons */}
        <ArrowButton direction="left" onClick={scrollLeft} />
        <ArrowButton direction="right" onClick={scrollRight} />
      </div>
      <div className="carousel" ref={carouselRef}>
        {children}
      </div>
    </div>
  );
};

export default Carousel;
