import React from "react";
import "./Roster.css";
import hearthstone from "../../assets/img/hs.png"
import smash from "../../assets/img/smash.png"
import fifa from "../../assets/img/fifa.png"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

class Roster extends React.Component{
  constructor(){
    super();
    this.state = {
      isFlippedHS: false,
      isFlippedSSBU:false,
      isFlippedFIFA:false
    }
    this.handleClickHS = this.handleClickHS.bind(this)
    this.handleClickSSBU = this.handleClickSSBU.bind(this)
    this.handleClickFIFA = this.handleClickFIFA.bind(this)
  }

  handleClickHS(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlippedHS: !prevState.isFlippedHS }));
  }

  handleClickSSBU(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlippedSSBU: !prevState.isFlippedSSBU }));
  }

  handleClickFIFA(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlippedFIFA: !prevState.isFlippedFIFA }));
  }
 
  render() {
    let isFlippedHS=this.state.isFlippedHS;
    let isFlippedSSBU=this.state.isFlippedSSBU;
    let isFlippedFIFA=this.state.isFlippedFIFA;

  return (
    <div className="roster">
      <h1 data-aos="fade-down" data-aos-duration="1000" id="h11">Nos équipes</h1>
      <div className="roster-container">
        <div onClick={this.handleClickHS} className="team-container"data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
        <h2 id="h22">Hearthstone</h2>
              <img src={hearthstone} alt="Conceptual" id="image11"></img>
        </div>
        {isFlippedHS && 
          <div onClick={this.handleClickHS} className="player-container"data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
        <h2 id="h22">Players:</h2>
            <p>Diabblos(c)</p>
            <p>Cocoaxe</p>
            <p>Cariboukoko</p>
            <p>LeCid</p>
            <p>WinterCo</p>
            <p>Trutru</p>
        </div>}
        <div onClick={this.handleClickSSBU} className="team-container" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800">
        <h2 id="h22">Smash Bros Ultimate</h2>
              <img src={smash} alt="Conceptual" id="image22"></img>
        </div>
        {isFlippedSSBU && 
          <div onClick={this.handleClickSSBU} className="player-container"data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
        <h2 id="h22">Players:</h2>
            <p>Mocra</p>
            <p>Zora</p>
        </div>}
        <div onClick={this.handleClickFIFA} className="team-container" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1100">
        <h2 id="h22">FIFA 21</h2>
              <img src={fifa} alt="Conceptual" id="image33"></img>
        </div>
        {isFlippedFIFA && 
          <div onClick={this.handleClickFIFA} className="player-container"data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
        <h2 id="h22">Players:</h2>
            <p>Yanis</p>
            <p>Cocoaxe</p>
        </div>}
      </div>
  
    </div>
  )};
};

export default Roster;
