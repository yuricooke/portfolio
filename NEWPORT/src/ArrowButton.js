// ArrowButton.js
import React from 'react';
import PropTypes from 'prop-types';

const ArrowButton = ({ direction, onClick }) => {
  return (
    <div className={`arrow-button ${direction}`} onClick={onClick}>
      {/* Simple text-based arrows */}
      {direction === 'left' ? '<< ' : ' >>'}
    </div>
  );
};

ArrowButton.propTypes = {
  direction: PropTypes.oneOf(['left', 'right']).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ArrowButton;
