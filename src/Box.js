// Box.js (Component 3)
import React from 'react';
import './Box.css'; // Import the CSS file

const Box = ({ image, title, onClick }) => {
  return (
    <div className="box" onClick={onClick} tabIndex={0}>
      <img src={image} alt="Box" />
      <div className="overlay">
        <h6>{title}</h6>
      </div>
    </div>
  );
};

export default Box;
