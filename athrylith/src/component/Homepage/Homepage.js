import React from "react";
import "./Homepage.css";
import athrylith from "../../assets/img/1.png"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Homepage = () => {
  return (
        <div class="title-group">
          <div className="title">
            <h1 id='h1' data-aos="fade-up" data-aos-duration="1000">Athrylith Gaming</h1>
            <h2 id='h2' data-aos="fade-right" data-aos-duration="600" data-aos-delay="500">Bienvenue sur notre site web</h2>
          </div>
          <div className="img" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="1000" >
            <img src={athrylith} alt="logo"></img>
          </div>
        </div>
  );
};

export default Homepage;
