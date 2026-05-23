import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div id="hero" className="hero-container">
      <div className="hero-left-section">
        <h1> India's First <span>AI-Native</span> <br />MBA for Working Professionals.</h1>
        <h2>Earn an <span>MBA</span>  degree from IIM Sirmaur without quitting your job. </h2>
        <a href="/public/Web Development Internship Assignment - LearningShala.pdf" download className="hero-btn">Apply Now</a>
      </div>
      <div className="hero-img"></div>
    </div>
  );
};

export default Hero;
