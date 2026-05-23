import React from "react";
import "./FeaturesCard.css";

const FeaturesCard = ({ title,text, logo }) => {
  return (
    <div className="features-card">
      <img src={logo} alt="logo" />
      <hr/>
      <p>{text}</p>
    </div>
  );
};

export default FeaturesCard;
