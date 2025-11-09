import React from "react";
import "./Profissional.css";
import WorkIcon from '@mui/icons-material/Work';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const Profissional = () => {
  return (
    <div className="profissional" id='Profissional' >
      <div className="section-header">
        <div className="header-with-icon">
          <WorkIcon className="section-icon" />
          <div>
            <h1>Professional Experience</h1>
            <p className="section-subtitle">8 years building impactful web solutions</p>
          </div>
        </div>
      </div>

      <div className="experience-timeline">
        <div className="job-card current">
          <div className="job-badge">
            <TrendingUpIcon className="badge-icon" />
            <span>Current</span>
          </div>
          <h2>Frontend Developer</h2>
          <h3>99x Digital Solutions</h3>
          <p className="location-date">Remote (Norway) • Nov 2023 - Present</p>
          <p className="description">Building web applications for Norwegian enterprise clients using React, TypeScript, and Next.js. Working on AI-driven features and intelligent automation.</p>
          <div className="tech-tags">
            <span className="tech-tag">React</span>
            <span className="tech-tag">TypeScript</span>
            <span className="tech-tag">Next.js</span>
            <span className="tech-tag">AI Integration</span>
          </div>
        </div>

        <div className="job-card">
          <h2>Frontend Developer</h2>
          <h3>Fiocruz - National School of Public Health</h3>
          <p className="location-date">Rio de Janeiro • Sep 2022 - Nov 2023</p>
          <p className="description">Built accessible e-learning platforms for healthcare professionals with focus on WCAG compliance and inclusive design.</p>
          <div className="tech-tags">
            <span className="tech-tag">React</span>
            <span className="tech-tag">WCAG/A11Y</span>
            <span className="tech-tag">E-Learning</span>
          </div>
        </div>

        <div className="job-card">
          <h2>Frontend Developer</h2>
          <h3>EnsineMe (EdTech)</h3>
          <p className="location-date">Rio de Janeiro • Apr 2020 - Sep 2022</p>
          <p className="description">Developed digital education products for Brazilian universities, designing UI in Figma and implementing in React.</p>
          <div className="tech-tags">
            <span className="tech-tag">React</span>
            <span className="tech-tag">Figma</span>
            <span className="tech-tag">Design Systems</span>
          </div>
        </div>
      </div>

      <div className="clients-section">
        <h3>Trusted by Leading Organizations</h3>
        <div className="clients-grid" >
          <div className="client-logo-wrapper">
            <img className="logo" src="/images/99xlogo.svg" alt="99x Digital Solutions" />
          </div>
          <div className="client-logo-wrapper">
            <img className="logo" src="/images/fiocruz.jpg" alt="Fiocruz" />
          </div>
          <div className="client-logo-wrapper">
            <img className="logo" src="/images/ensineme.jpg" alt="EnsineMe" />
          </div>
          <div className="client-logo-wrapper">
            <img className="logo" src="/images/unoglobo.jpg" alt="Uniglobo" />
          </div>
          <div className="client-logo-wrapper">
            <img className="logo" src="/images/bradesco.png" alt="Bradesco" />
          </div>
          <div className="client-logo-wrapper">
            <img className="logo" src="/images/ens-7.jpg" alt="ENS" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Profissional;
