import React from "react";
import { Link } from "react-router-dom";
import "./NavigationMenu.css";

export const NavigationMenu = () => {
  return (
    <nav className="nav-container">
      <ul className="links-menu">
        <Link to="/">
          <li className="list-menu-item">LANDING</li>
        </Link>
        <Link to="/login">
          <li className="list-menu-item">LOGIN</li>
        </Link>
        <Link to="/data">
          <li className="list-menu-item">DATA</li>
        </Link>
      </ul>
    </nav>
  );
};
