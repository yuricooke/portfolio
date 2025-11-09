import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaptopIcon from "@mui/icons-material/Laptop";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SchoolIcon from "@mui/icons-material/School";
import PublicIcon from "@mui/icons-material/Public";
import FileOpenIcon from '@mui/icons-material/FileOpen';

import "./NavBar.css"



const NavBar = ({ onNavLinkClick, activeSection }) => {
  const githubLink = "https://github.com/yuricooke";
  const linkedinLink = "https://www.linkedin.com/in/yuricooke";
  const whatsappLink =
    "https://wa.me/34678646990/?text=Hi!%20I'm%20looking%20for%20an%20amazing%20front-end%20developer.";
  const resumeLink = process.env.PUBLIC_URL + "/Yuri_Cooke_Frontend_Developer.pdf";

  return (
    <div className="nav-bar">
      <div
        className={`nav-item ${activeSection === "Projects" ? "active" : ""}`}
        onClick={() => onNavLinkClick("Projects") }
      >
        <LaptopIcon />
        <figcaption>Projects</figcaption>
      </div>
      <div
        className={`nav-item ${activeSection === "Perfil" ? "active" : ""}`}
        onClick={() => onNavLinkClick("Perfil")  }
      >
        <AccountBoxIcon />
        <figcaption><nobr>About Me</nobr></figcaption>
      </div>
      <div
        className={`nav-item ${activeSection === "Academico" ? "active" : ""}`}
        onClick={() => onNavLinkClick("Academico")}
      >
        <SchoolIcon />
        <figcaption>Academics</figcaption>
      </div>
      <div
        className={`nav-item ${activeSection === "Profissional" ? "active" : ""}`}
        onClick={() => onNavLinkClick("Profissional")}
      >
        <PublicIcon />
        <figcaption>Work</figcaption>
      </div>

      <hr></hr>

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
      <div className={`nav-item ${activeSection === "Resume" ? "active" : ""}`}>
        <a href={resumeLink} target="_blank" rel="noopener noreferrer">
          <FileOpenIcon onClick={() => onNavLinkClick("Resume")} />
          <figcaption>Curriculum</figcaption>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
