import React, { useState, useEffect } from "react";
import "./CTA.css";
import { assets } from "../../assets/progrmData";

const CTA = () => {
  const [showCTABtn, setShowCTABtn] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowCTABtn(true);
      } else {
        setShowCTABtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      {showCTABtn && (
        <a className="cta-btn" href="/public/Web Development Internship Assignment - LearningShala.pdf" download>
          <img src={assets.download_icon} alt="" />
          Download Brochure
        </a>
      )}
    </>
  );
};

export default CTA;
