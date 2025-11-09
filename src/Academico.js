import React from "react";
import "./Academico.css";
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const Academico = () => {
  return (
    <div className="academico" id='Academico'>
      <div className="academic-header">
        <div className="header-with-icon">
          <SchoolIcon className="section-icon" />
          <div>
            <h1>Education</h1>
            <p className="section-subtitle">Academic background & qualifications</p>
          </div>
        </div>
      </div>

      <div className="academic-content">
        <div className="university-section">
          <div className="university-logo-wrapper">
            <img className="puc-logo" src="https://www.puc-rio.br/imagens/Brasao_PUC_aAusjal_Jesuitas_2023-final-branco.png" alt="PUC-Rio" />
          </div>
          <div className="university-name">
            <h3>Pontifícia Universidade Católica do Rio de Janeiro</h3>
            <p>PUC-Rio • Brazil</p>
          </div>
        </div>

        <div className="degrees-grid">
          <div className="degree-card">
            <div className="degree-icon-wrapper">
              <EmojiEventsIcon className="degree-icon" />
            </div>
            <div className="degree-info">
              <h2>Master of Science</h2>
              <h3>Computer Science</h3>
              <p className="dates">June 2023 - March 2024</p>
              <div className="degree-highlights">
                <span className="highlight-tag">Fullstack Development</span>
                <span className="highlight-tag">Software Engineering</span>
              </div>
            </div>
          </div>

          <div className="degree-card">
            <div className="degree-icon-wrapper">
              <SchoolIcon className="degree-icon" />
            </div>
            <div className="degree-info">
              <h2>Bachelor of Fine Arts</h2>
              <h3>Graphic Design</h3>
              <p className="dates">2002 - 2006</p>
              <div className="degree-highlights">
                <span className="highlight-tag">Visual Design</span>
                <span className="highlight-tag">UI/UX</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academico;
