import React from "react";
import "./Navbar.css";
import menacing from './images/menacing.png';

const Navbar = props => (
  <nav className="level is-fixed-top navbar is-mobile">
    <div className="level-item has-text-centered">
      <img className="brand-img" src={menacing} alt="menacing" />
      <p className="brand-name">JJRA</p>
    </div>
    <p className="level-item has-text-centered">Score: {props.score}</p>
    <p className="level-item has-text-centered">HighScore: {props.highscore}</p>
  </nav>
);

export default Navbar;
