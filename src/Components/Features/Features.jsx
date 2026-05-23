import React from "react";
import FeaturesCard from "../FeaturesCard/FeaturesCard.jsx";
import "./Features.css";
import { assets } from "../../assets/progrmData";

const Features = () => {
  return (
    <div id="features" className="features-container">
      <h2>Why Choose the IIM Sirmaur Online MBA?</h2>
      <hr />
      <p>Designed for working professionals seeking leadership, flexibility, and future-ready AI skills.</p>
      <div className="features-card-container">
        <FeaturesCard
          title={"100% Live Online Weekend Classes. "}
          logo={assets.live_logo}
          text="Learn without leaving your job through flexible weekend sessions led by experienced faculty."
        />
        <FeaturesCard
          title={"Direct IIM Alumni Status."}
          logo={assets.degree_logo}
          text="Join an influential alumni network and build valuable professional connections."
        />
        <FeaturesCard
          title={"24-Month Duration with Campus Immersions."}
          logo={assets.month_logo}
          text="Balance work and education while gaining on-campus exposure and practical insights."
        /><FeaturesCard
          title={"Specializations: AI-Powered Finance, Marketing, and Operations."}
          logo={assets.education_logo}
          text="Develop industry-relevant expertise in Finance, Marketing, and Operations using AI."
        />
      </div>
    </div>
  );
};

export default Features;
