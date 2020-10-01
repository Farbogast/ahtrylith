import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap-css-only/css/bootstrap.min.css";
import "./Carousel.css";
import esport2 from "../../assets/img/epsort2.jpg";

function HomepageCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src={esport2}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Ahtrylith Gaming</h3>
          <p>Bienvenue sur le site internet d'Athrylith Gaming</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src={esport2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Nos équipes</h3>
          <p>Nos équipes sur les Hearthstone, Smash bros Ultimate et FIFA20</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src={esport2}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Contacter nous !</h3>
          <p>Besoin d'une information? Envie de nous rejoindre?</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomepageCarousel;
