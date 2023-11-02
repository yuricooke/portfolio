import React from "react";
import "./Perfil.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import Tags from "./Tags";

const Perfil = () => {

  return (
    <div className="profile" id="Perfil">
      <AboutMe />
      <Tags />
    </div>
  );
};

const AboutMe = () => {
  const githubLink = "https://github.com/yuricooke";

  return (
    <div >
      <div className="title">
        <div className="image-container">
          <img className="image" src="Cooke_Yuri.jpg" alt="Yuri Cooke" />
        </div>
        <div className="block">
          <h1>Yuri Cooke</h1>
          <h2 className="icon-line">
            Frontend Developer | UI-UX Designer{" "}
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <GitHubIcon className="icon" />
            </a>
          </h2>
        </div>
      </div>
      <div className="intro">
        <p>I`m Yuri Cooke. Born in Rio de Janeiro, Brazil.</p>
        <p>I'm an <span className="highlight highlighted">inspired Frontend developer</span>, deeply immersed in the <span className="highlight highlighted">arts of UI & UX</span>, with a strong <span className="highlight highlighted">commitment to #a11y</span> (web accessibility).</p>

        <p>This fusion of creative and practical worlds fuels my passion to create fresh projects where I focus on using my skills, offer my knowledge, and share my passions on challenges that center around programming and design, with the aim of making a positive contribution to the world.</p>

      </div>


    </div>

  )
};

export default Perfil;
