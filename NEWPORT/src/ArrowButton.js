// ArrowButton.js
import React from 'react';
import PropTypes from 'prop-types';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const ArrowButton = ({ direction, onClick }) => {
  return (
    <div className={`arrow-button ${direction}`} onClick={onClick}>
      {/* Simple text-based arrows */}
      {direction === 'left' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
    </div>
  );
};

ArrowButton.propTypes = {
  direction: PropTypes.oneOf(['left', 'right']).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ArrowButton;
