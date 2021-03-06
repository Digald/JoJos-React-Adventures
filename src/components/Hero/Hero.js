import React from "react";
import './Hero.css';

const Hero = props => (
  <section className="hero">
    <div className="hero-body">
      <div className="container is-fluid">
        <h1 className="title">JoJo's React Adventures</h1>
        <h2 className="subtitle">Click and image to earn a point, but don't click on any more than once!</h2>
      </div>
    </div>
  </section>
);

export default Hero;
