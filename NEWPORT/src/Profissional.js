import React from "react";
import "./Profissional.css";

const Profissional = () => {
  return (
    <div className="profissional" id='Profissional' >
        <h1>Professional</h1>
        <h3>Here I list some of the places I worked and some of my clients. </h3>

      <div className="row" >
        <img className="logo" src="https://ensineme.com.br/img/logo.png" alt="EnsineMe" ></img>
        <img className="logo" src="https://www.yduqs.com.br/images/logo-yduqs.png" alt="Yduqs" ></img>
        <img className="logo" src="https://portal.fiocruz.br/sites/portal.fiocruz.br/themes/portalnovo/images/logo/logo-fiocruz-semfundo.png" alt="FioCruz" ></img>
        <img className="logo" src="https://banco.bradesco/assets/classic/home/images/logo-mobile.png" alt="Bradesco" ></img>
        <img className="logo" src="https://www.uniglobo.com.br/plataforma/account/images/logo-login.png" alt="Uniglobo" ></img>
        <img className="logo" src="https://mba.ens.edu.br/template/layout/images/2021/logo_horinzontal_branca.svg" alt="ENS" ></img>
      
      </div>

    </div>
  );
};

export default Profissional;
