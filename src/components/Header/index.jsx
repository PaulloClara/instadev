import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

import logo from "../../assets/imgs/logo.svg";
import camera from "../../assets/icons/camera.svg";

export default _ => (
  <header id="main-header">
    <div className="header-content">
      <Link to="/">
        <img src={logo} alt="InstaDev"></img>
      </Link>

      <Link to="/new">
        <img src={camera} alt="Enviar publicação"></img>
      </Link>
    </div>
  </header>
);
