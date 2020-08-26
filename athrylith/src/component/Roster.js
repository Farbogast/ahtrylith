import React from "react";
import ReactCountryFlag from "react-country-flag";
import "./Roster.css";

const Roster = () => {
  return (
    <div className="container">
      <div className="titleR">Welcome to our Rosters</div>
      <div className="roster">
        <div className="team">
          Hearthstone Roster
          <div className="player">
            <ReactCountryFlag countryCode="FR" svg />
            Diabblos(c)
          </div>
          <div className="player">
            <ReactCountryFlag countryCode="BE" svg />
            Cariboukoko
          </div>
          <div className="player">
            <ReactCountryFlag countryCode="FR" svg />
            Lecid
          </div>
          <div className="player">
            <ReactCountryFlag countryCode="FR" svg />
            Cocoaxe
          </div>
          <div className="player">
            <ReactCountryFlag countryCode="FR" svg />
            WinterCo
          </div>
          <div className="player">
            <ReactCountryFlag countryCode="FR" svg />
            Trutru
          </div>
        </div>
        <div className="team">
          Roster R6
          <div className="player">
            <ReactCountryFlag countryCode="FR" svg />
            Etoiles(c)
          </div>
          <div className="player">
            <ReactCountryFlag countryCode="FR" svg />
            Scary
          </div>
          <div className="player">
            <ReactCountryFlag countryCode="FR" svg />
            WhiteTiger
          </div>
          <div className="player">
            <ReactCountryFlag countryCode="CH" svg />
            Ung
          </div>
          <div className="player">
            <ReactCountryFlag countryCode="FR" svg />
            Monster flip
          </div>
        </div>
        <div className="team">
          <div className="team1">
            Roster SSBU
            <div className="player">
              <ReactCountryFlag countryCode="FR" svg />
              SSBU1
            </div>
            <div className="player">
              <ReactCountryFlag countryCode="FR" svg />
              SSBU2
            </div>
          </div>
          <div className="team1">
            Roster FIFA20
            <div className="player">
              <ReactCountryFlag countryCode="FR" svg />
              Yanis
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roster;
