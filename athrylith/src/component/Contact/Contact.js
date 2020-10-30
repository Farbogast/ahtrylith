import React from "react";
import "./Contact.css";
import discord from "../../assets/img/discord-icon.png";
import twitter from "../../assets/img/twitter.png";
import twitch from "../../assets/img/twitch.png";
import facebook from '../../assets/img/facebook.svg';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init()


const Contact = () => {
  return (
    <div className="container">
      <h1 data-aos="fade-down" data-aos-duration="1000" id="h11">Nous Contacter</h1>
      <div className="contact">
        <div className="contact1" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
          <a href="https://discord.gg/vy5WFg">
            <img className="logo" src={discord} alt='discord'></img>
          </a>
        </div>
        <div className="contact1" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800">
          <a href="https://twitter.com/athrylithgaming">
            <img className="logo" src={twitter} alt='twitter'></img>
          </a>
        </div>
        <div className="contact1" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1100">
          <a href="https://www.twitch.tv/athrylithgamingtv">
            <img className="logo" src={twitch} alt='twitch'></img>
          </a>
        </div>
        <div className="contact1"data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1400">
          <a href="https://www.facebook.com/AthrylithGaming">
            <img className="logo" src={facebook} alt='facebook'></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
