import React from "react";
import { Card } from "react-bootstrap";
import test from "../../assets/img/1.png";
import "./Contact.css";
import discord from "../../assets/img/discord-icon.png";
import twitter from "../../assets/img/twitter.png";

const Contact = () => {
  return (
    <div className="container">
      <div className="title">Notre Staff</div>
      <div className="Staff">
        <div className="member">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={test} />
            <Card.Body>
              <Card.Title>BigPanda</Card.Title>
              <Card.Text>Président</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="member">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={test} />
            <Card.Body>
              <Card.Title>Bourbonkid</Card.Title>
              <Card.Text>Vice-Président</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="member">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={test} />
            <Card.Body>
              <Card.Title>Bento</Card.Title>
              <Card.Text>Manager FIFA / Partenariat</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="member">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={test} />
            <Card.Body>
              <Card.Title>Diabblos</Card.Title>
              <Card.Text>Capitaine/Coach Hearthstone</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="title">Nous contacter</div>
      <div className="contact">
        <div className="contact1">
          <a href="https://discord.gg/vy5WFg">
            <img className="logo" src={discord}></img>
          </a>
        </div>
        <div className="contact1">
          <a href="https://twitter.com/athrylithgaming">
            <img className="logo" src={twitter}></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
