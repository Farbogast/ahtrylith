import React from "react";
import "./Roster.css";
import hearthstone from "../../assets/img/hearthstone.png"
import smash from "../../assets/img/smash.png"
import fifa from "../../assets/img/fifa.png"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Roster = () => {
  return (
    <div className="roster">
      <h1 data-aos="fade-down" data-aos-duration="1000" id="h11">Nos équipes</h1>
      <div className="roster-container">
        <div className="team-container"data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
        <h2 id="h22">Hearthstone</h2>
              <img src={hearthstone} alt="Conceptual" id="image11"></img>
        </div>
        <div className="team-container" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800">
        <h2 id="h22">Smash Bros Ultimate</h2>
              <img src={smash} alt="Conceptual" id="image22"></img>
        </div>
        <div className="team-container" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1100">
        <h2 id="h22">FIFA 21</h2>
              <img src={fifa} alt="Conceptual" id="image33"></img>
        </div>
      </div>
  
    </div>
  );
};

export default Roster;
