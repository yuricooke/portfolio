import React from 'react';
import './Footer.css';
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ContactMailIcon from '@mui/icons-material/ContactMail';
import FileOpenIcon from '@mui/icons-material/FileOpen';

const Footer = ({ onFooterLinkClick }) => {
  const githubLink = "https://github.com/yuricooke";
  const linkedinLink = "https://www.linkedin.com/in/yuricooke";
  const whatsappLink = "https://wa.me/5521997423956/?text=Hi!%20I'm%20looking%20for%20an%20amazing%20front-end%20developer.";
  const emailLink = "mailto:yuricooke@yahoo.com"; // Use mailto: to create an email link

  // Assuming CV.pdf is in the public folder
  const resumeLink = process.env.PUBLIC_URL + "/CV.pdf";

  return (
    <div className='footer'>
      <div className='col-l'>
        <h3>Yuri Cooke</h3>
        <p>Copacabana<br />Rio de Janeiro, BR</p>
      </div>
      <div className='col-m'>
        <h3>&nbsp;</h3>
        <p>Find me on:<br/>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon className='icon-footer' onClick={() => onFooterLinkClick("WhatsApp")} />
        </a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <GitHubIcon className='icon-footer' onClick={() => onFooterLinkClick("GitHub")} />
        </a>
        <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
          <LinkedInIcon className='icon-footer' onClick={() => onFooterLinkClick("LinkedIn")} />
        </a>
        <a href={emailLink} target="_blank" rel="noopener noreferrer">
          <ContactMailIcon className='icon-footer' onClick={() => onFooterLinkClick("Email")} />
        </a>
        </p>
      </div>
      <div className='col-r'>
        <h3>&nbsp;</h3>
        <p>My Curriculum:<br/>
        <a href={resumeLink} className='icon-footer' target="_blank" rel="noopener noreferrer">
          <FileOpenIcon />
        </a></p>
      </div>
    </div>
  );
}

export default Footer;
