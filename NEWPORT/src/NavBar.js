// NavBar.js
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaptopIcon from "@mui/icons-material/Laptop";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SchoolIcon from "@mui/icons-material/School";
import PublicIcon from "@mui/icons-material/Public";
import FileOpenIcon from '@mui/icons-material/FileOpen';


const NavBar = ({ onNavLinkClick }) => {
    const githubLink = "https://github.com/yuricooke";
    const linkedinLink = "https://www.linkedin.com/in/yuricooke";
    const whatsappLink =
      "https://wa.me/5521997423956/?text=Hi!%20I'm%20looking%20for%20an%20amazing%20front-end%20developer.";
  const resumeLink = process.env.PUBLIC_URL + "/CV.pdf";
    
  
    return (
      <div className="nav-bar">
        <div className="nav-item" onClick={() => onNavLinkClick("Projects")}>
          <LaptopIcon />
          <figcaption>Projects</figcaption>
        </div>
        <div className="nav-item" onClick={() => onNavLinkClick("Perfil")}>
          <AccountBoxIcon />
          <figcaption><nobr>About Me</nobr></figcaption>

        </div>
        <div className="nav-item" onClick={() => onNavLinkClick("Academico")}>
          <SchoolIcon />
          <figcaption>Academics</figcaption>

        </div>
        <div className="nav-item" onClick={() => onNavLinkClick("Profissional")}>
          <PublicIcon />
          <figcaption>Work</figcaption>

        </div>
        <hr className="menu-line"></hr>
        <div className="nav-item">
          <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
            <LinkedInIcon onClick={() => onNavLinkClick("LinkedIn")} />
          <figcaption>LinkedIn</figcaption>

          </a>
        </div>
        <div className="nav-item">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon onClick={() => onNavLinkClick("WhatsApp")} />
          <figcaption>WhatsApp</figcaption>

          </a>
        </div>
        <div className="nav-item">
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <GitHubIcon onClick={() => onNavLinkClick("GitHub")} />
          <figcaption>Github</figcaption>

          </a>
        </div>
        <div className="nav-item">
        <a href={resumeLink} target="_blank" rel="noopener noreferrer">
          <FileOpenIcon onClick={() => onNavLinkClick("Resume")} />
          <figcaption>Curriculum</figcaption>
        </a>

        </div>
      </div>
    );
  };
  

export default NavBar;
