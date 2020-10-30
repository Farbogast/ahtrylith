import React from "react";
import "./staff.css";
import fifa from "../../assets/img/fifa.png"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Staff = () => {
  return (
    <div className="staff">
      <h1 data-aos="fade-down" data-aos-duration="1000">Notre Staff</h1>
      <div className="staff-container">
        <div className="ppl-container"data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
        <h2>Bigpanda</h2>
              <img src={fifa} alt="Conceptual" id="image1"></img>
              <h3>Président</h3>
        </div>
        <div className="ppl-container" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800">
        <h2>Bourbonkid</h2>
              <img src={fifa} alt="Conceptual" id="image2"></img>
              <h3>Vice-président</h3>
        </div>
        <div className="ppl-container" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1100">
        <h2>Bento</h2>
              <img src={fifa} alt="Conceptual" id="image3"></img>
              <h3>Manager FIFA - Partenariat</h3>
        </div>
        <div className="ppl-container" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1300">
        <h2>Diabblos</h2>
              <img src={fifa} alt="Conceptual" id="image4"></img>
              <h3>Coach Hearthstone</h3>
        </div>
      </div>
  
    </div>
  );
};

export default Staff;