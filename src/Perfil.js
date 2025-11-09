import React from "react";
import "./Perfil.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import Tags from "./Tags";

const Perfil = () => {

  return (
    <div className="profile-section" id="Perfil">
      <AboutMe />
      <Tags />
    </div>
  );
};

const AboutMe = () => {
  const githubLink = "https://github.com/yuricooke";
  const linkedinLink = "https://www.linkedin.com/in/yuricooke";
  const emailLink = "mailto:yuricooke@gmail.com";

  return (
    <div className="profile-content">
      <div className="profile-header">
        <img className="profile-photo" src={`${process.env.PUBLIC_URL}/images/Cooke_Yuri.jpg`} alt="Yuri Cooke" />
        <div className="header-info">
          <h1>Yuri Cooke</h1>
          <div className="title-role">Front-End Developer & UI/UX Designer</div>
          <p className="location">📍 Barcelona, Spain</p>
          <div className="social-links">
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="social-icon">
              <GitHubIcon />
            </a>
            <a href={linkedinLink} target="_blank" rel="noopener noreferrer" className="social-icon">
              <LinkedInIcon />
            </a>
            <a href={emailLink} target="_blank" rel="noopener noreferrer" className="social-icon">
              <EmailIcon />
            </a>
          </div>
        </div>
      </div>
      
      <div className="profile-intro">
        <div className="intro-highlight">
          <h3>+8 Years of Experience</h3>
          <p>Building web interfaces, from e-learning platforms to enterprise applications</p>
        </div>
        
        <div className="intro-text">
          <p>Frontend engineer with 8 years building web interfaces, from <span className="highlight">e-learning platforms</span> to <span className="highlight">enterprise applications</span>. Started in graphic design, evolved into UI/UX, now focused on <span className="highlight">React and TypeScript</span> development.</p>
          <p>Specialized in transforming <span className="highlight">Figma designs into production-ready code</span>, building <span className="highlight">design systems</span>, and creating user experiences that make a difference. Strong commitment to <span className="highlight">accessibility (WCAG)</span> and consistently achieving 90+ Lighthouse scores.</p>
          <p>Currently exploring <span className="highlight">AI-driven interfaces</span> and intelligent automation. Based in Barcelona, working remotely with international teams.</p>
        </div>
      </div>
    </div>
  )
};

export default Perfil;
