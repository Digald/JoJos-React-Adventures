import React from "react";
// import css here

const Navbar = props => (
  <nav className="level is-fixed-top navbar">
    <p className="level-item has-text-centered">
      JJRA
    </p>
    <p className="level-item has-text-centered">
      Correct or Wrong text
    </p>
    <p className="level-item has-text-centered">
      Score: {props.score}
    </p>
    <p className="level-item has-text-centered">
      HighScore: {props.highscore}
    </p>
  </nav>
);

export default Navbar;
