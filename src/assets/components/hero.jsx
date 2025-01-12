import React from "react";
import "./hero.css";
// import img from "./img-home.jpg"; // Adjust the path as needed
import img from '../react.svg'
const Hero = () => {
  return (
    <main className="main-bg">
      {/* HOME */}
      <div className="home">
        <div className="home__primary">
          <h1 className="home__title">
            Innovate <br /> Connect Explore
          </h1>
          <div className="home__img">
            <img src={img} alt="Fashion" />
          </div>
        </div>
        <div className="home__secondary">
          <a className="home__scroll" href="#about">
            SCROLL DOWN
          </a>
          <span className="home__year">2025</span>
        </div>
      </div>
    </main>
  );
};

export default Hero;
