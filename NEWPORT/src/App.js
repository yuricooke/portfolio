import React, { useState, useEffect } from 'react';

import ReactGA from "react-ga";

import projectsData from './data';

import NavBar from './NavBar';
import Background from './Background';
import Carousel from './Carousel';
import Box from './Box';
import Perfil from './Perfil';
import Academico from './Academico';
import Profissional from './Profissional';
import Footer from './Footer';

 
const TRACKING_ID = "UA-89355742-2";
ReactGA.initialize(TRACKING_ID);


const App = () => {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);


  const [backgroundImage, setBackgroundImage] = useState(projectsData[0]?.imageUrl || '');
  const [selectedProject, setSelectedProject] = useState(projectsData[0] || {});
  const [activeSection, setActiveSection] = useState('Projects');

  const handleBoxClick = (project) => {
    setBackgroundImage(project.imageUrl);
    setSelectedProject(project);
  };

  const handleNavLinkClick = (section) => {
    setActiveSection(section);

    // Log the section and attempt to scroll
    console.log('Scrolling to section:', section);

    const sectionElement = document.getElementById(section);
    console.log('Section Element:', sectionElement);

    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn(`Element with id '${section}' not found.`);
    }
  };

  const onFooterLinkClick = (link) => {
    // Handle clicks on footer links
    console.log(`Clicked on footer link: ${link}`);
    // Add logic to handle each type of link (e.g., open email, download CV, etc.)
  };

  useEffect(() => {
    // Additional initialization logic can go here if needed
  }, []);

  return (
      <div className="app">
        <NavBar onNavLinkClick={handleNavLinkClick} activeSection={activeSection}   />
        <div className='components'>
          <Background id='Projects'
            backgroundImage={`url(${backgroundImage})`}
            logo={selectedProject.logo}
            description={selectedProject.description}
            demoUrl={selectedProject.url}
          />
          <Carousel>
            {projectsData.map((project) => (
              <Box
                key={project.id}
                image={project.imageUrl}
                title={project.title}
                onClick={() => handleBoxClick(project)}
              />
            ))}
          </Carousel>
          <Perfil  />
          <Academico  />
          <Profissional />
          <Footer className='footer' onFooterLinkClick={onFooterLinkClick} />
        </div>
      </div>
  );
};

export default App;
