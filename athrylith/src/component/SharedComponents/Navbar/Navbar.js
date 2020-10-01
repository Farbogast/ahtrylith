import React from "react";
//import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import logo from "../../../assets/img/1.png";

const Navbar1 = () => {
  return (
    <Navbar collapseOnSelect>
      <Navbar.Brand href="/">
        <img className="logo1" src={logo} alt="Athrylith Gaming" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/roster">Teams</Nav.Link>
          <Nav.Link href="/contact">Contact Us</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="https://twitter.com/athrylithgaming">
            Twitter
          </Nav.Link>
          <Nav.Link href="https://www.facebook.com/AthrylithGaming/">
            Facebook
          </Nav.Link>
          <Nav.Link href="https://www.twitch.tv/athrylithgamingtv">
            Twitch
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navbar1;
