import React from 'react';
import './Background.css';

const Background = ({
  backgroundImage,
  logo, // Add the logo prop
  description, // Add the description prop
  demoUrl, // Add the demoUrl prop
}) => {
    const handleDemoButtonClick = () => {
        window.open(demoUrl, '_blank'); // Open in a new window or tab using demoUrl prop
      };
      
  return (
    <div className="background" id='Projects' style={{ backgroundImage }}>
      <div className="content">
        <h3>YURI COOKE</h3>
        <h1>Projects</h1>
        <img src={logo} alt="Logo" /> {/* Use the logo prop */}
        <p dangerouslySetInnerHTML={{ __html: description }} />

        <button onClick={handleDemoButtonClick}>View project</button>
      </div>
    </div>
  );
};

export default Background;
