import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Athrylith Gaming</h1>
      <ul>
        <li>
          <Link to="/roster">Nos Equipes</Link>
        </li>
        <li>
          <Link to="/news">News</Link>
        </li>
        <li>
          <Link to="/contact">Nous Contacter</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
