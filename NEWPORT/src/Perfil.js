import React from "react";
import "./Perfil.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import Tags from "./Tags";

const Perfil = () => {
  const githubLink = "https://github.com/yuricooke";

  return (
    <div className="profile" id="Perfil">
      <div className="title">
        <div className="block">
          <h1>Yuri Cooke</h1>
          <h2 className="icon-line">
            Fullstack Developer{" "}
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <GitHubIcon className="icon" />
            </a>
          </h2>
        </div>
        <div className="image-container">
          <img className="image" src="Cooke_Yuri.jpg" alt="Yuri Cooke" />
        </div>
      </div>
      <hr className="line" />
      <div className="intro">
        <h3>Hi, guys!</h3>
        <p>I`m Yuri Cooke. Born in Rio de Janeiro, Brasil.</p>
        <p>
          I`m a{" "}
          <span className="highlight highlighted">
            motivated Frontend developer
          </span>
          , with an{" "}
          <span className="highlight highlighted">
            extensive UI & UX background
          </span>{" "}
          and{" "}
          <span className="highlight highlighted">
            Web Accessibility commitment
          </span>
          .
        </p>
        <p>
          Combining these worlds inspires me to develop new projects focused on
          the user experience.
        </p>
        <p>
          I am here to use my skills, give my knowledge and share my passions in
          order to participate in challenges that lead all of us to a better
          way.
        </p>
      </div>

      <hr className="line" />

      <Tags />
    </div>
  );
};

export default Perfil;
