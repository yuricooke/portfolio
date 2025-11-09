import React from 'react';
import './Footer.css';
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import DescriptionIcon from '@mui/icons-material/Description';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='footer-info'>
          <h2>Yuri Cooke</h2>
          <p className='footer-title'>Front-End Developer & UI/UX Designer</p>
          <p className='footer-location'>Barcelona, Spain</p>
        </div>

        <div className='footer-links'>
          <div className='footer-section'>
            <h3>Contact</h3>
            <a href="mailto:yuricooke@gmail.com" className='footer-link'>
              <EmailIcon className='footer-icon' />
              <span>yuricooke@gmail.com</span>
            </a>
            <a href="tel:+34678646990" className='footer-link'>
              <PhoneIcon className='footer-icon' />
              <span>+34 678 64 69 90</span>
            </a>
          </div>

          <div className='footer-section'>
            <h3>Connect</h3>
            <a href="https://github.com/yuricooke" target="_blank" rel="noopener noreferrer" className='footer-link'>
              <GitHubIcon className='footer-icon' />
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/yuricooke" target="_blank" rel="noopener noreferrer" className='footer-link'>
              <LinkedInIcon className='footer-icon' />
              <span>LinkedIn</span>
            </a>
            <a href={process.env.PUBLIC_URL + "/Yuri_Cooke_Frontend_Developer.pdf"} target="_blank" rel="noopener noreferrer" className='footer-link'>
              <DescriptionIcon className='footer-icon' />
              <span>Resume</span>
            </a>
          </div>
        </div>
      </div>

      <div className='footer-bottom'>
        <p>© {currentYear} Yuri Cooke. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
