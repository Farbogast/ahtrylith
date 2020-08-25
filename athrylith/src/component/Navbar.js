import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
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
