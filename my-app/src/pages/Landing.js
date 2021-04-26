import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import "./Pages.css";

export const Landing = () => {
  const [token] = useContext(AuthContext);

  return !token ? (
    <div className="landing-container">
      <h1 className="landing-title">Bienvenido a tu visor de datos.</h1>
      <div className="link-container">
        <a href="/Login">
          <h3 className="landing-subtitle">Inicia sesion </h3>
        </a>
        <h3 className="langind-subtitle">para comenzar a visualizarlos.</h3>
      </div>
    </div>
  ) : (
    <div className="landing-container">
      <h1 className="landing-title">Bienvenido a tu visor de datos.</h1>
      <div className="link-container">
        <h3 className="landing-subtitle">Ya puedes visualizar tus datos.</h3>
      </div>
    </div>
  );
};
