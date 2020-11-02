import React from "react";
import "./Contact.css";
import discord from "../../assets/img/discord1.png";
import twitter from "../../assets/img/twitter.png";
import twitch from "../../assets/img/twitch1.png";
import facebook from '../../assets/img/facebook.svg';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init()


const Contact = () => {
  return (
    <div className="container">
      <h1 data-aos="fade-down" data-aos-duration="1000" id="h11">Nous Contacter</h1>
      <div className="contact">
        <div className="contact1" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
          <a id="contact" href="https://discord.gg/vy5WFg" target='_blank' rel="noopener noreferrer"> 
            <img className="logo" src={discord} alt='discord'></img>
          </a>
        </div>
        <div className="contact1" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800">
          <a id="contact" href="https://twitter.com/athrylithgaming" target='_blank' rel="noopener noreferrer">
            <img className="logo" src={twitter} alt='twitter'></img>
          </a>
        </div>
        <div className="contact1" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1100">
          <a id="contact" href="https://www.twitch.tv/athrylithgamingtv" target='_blank' rel="noopener noreferrer">
            <img className="logo" src={twitch} alt='twitch'></img>
          </a>
        </div>
        <div className="contact1"data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1400">
          <a id="contact" href="https://www.facebook.com/AthrylithGaming" target='_blank' rel="noopener noreferrer">
            <img className="logo" src={facebook} alt='facebook'></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
