import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-badge">Very proud to introduce</span>
        <h1>Seamless Learning for Brighter Future</h1>
        <p>
          Our innovative platform offers an effortless and seamless approach to learning, empowering
          students of all ages to achieve brighter future. Join us on a transformative journey to
          simplify education and unlock your full potential.
        </p>
        <div className="hero-buttons">
          <button className="start-btn">Start Now</button>
          <button className="tour-btn">Take Tour</button>
        </div>
      </div>
      <div className="hero-image">
        <img
          src="https://r3yz0n.github.io/temp/1663928047_shutterstock_2083362643.avif"
          alt="Developer working"
        />
      </div>
    </section>
  );
};

export default Hero;
