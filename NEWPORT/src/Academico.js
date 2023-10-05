import React from "react";
import "./Academico.css";

const Academico = () => {
  return (
    <div className="academico" id='Academico'>
        <h1>Academics</h1>
      <div className="row" >
        <img className="puc-logo" src="https://www.puc-rio.br/imagens/Brasao_PUC_aAusjal_Jesuitas_2023-final-branco.png" alt="logo PUC" ></img>
      <div>
        <h2>Masters</h2>
        <p>PUC-Rio, Desenvolvimento Fullstack </p>
      </div>
      <div>
        <h2>Graduação</h2>
        <p>PUC-Rio, Visual Design </p>
      </div>
      </div>

    </div>
  );
};

export default Academico;
