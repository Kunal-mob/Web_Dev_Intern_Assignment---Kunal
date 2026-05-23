import React from "react";
import "./LeadForm.css";

const LeadForm = () => {
  return (
    <div id="leadform" className="leadform-container">
      <div className="leadform-container-title">
        <h2>Ready to Accelerate Your Career?</h2>
        <hr />
        <p>
          Get the program brochure and speak with our admission counsellors.
        </p>
      </div>
      <form className="leadform-form">
        <div className="input-field">
          <label htmlFor="name">Name:</label>
          <input
            placeholder="Enter your name"
            type="text"
            name="name"
            required
          />
        </div>
        <div className="input-field">
          <label htmlFor="email">Email:</label>
          <input
            placeholder="Enter your email"
            type="email"
            name="email"
            required
          />
        </div>
        <div className="input-field">
          <label htmlFor="phone">Phone no:</label>
          <input
            placeholder="Enter your phone number"
            type="text"
            name="phone"
            required
          />
        </div>
        <div className="input-field">
          <label htmlFor="currentDesignation">Current Designation:</label>
          <input
            placeholder="Enter your current designation"
            type="text"
            name="currentDesignation"
            required
          />
        </div>
        <div className="input-field">
          <label htmlFor="experience">Experience:</label>
          <input
            placeholder="Enter your experience in months"
            type="number"
            name="experience"
            required
          />
        </div>
        <button className="submit-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LeadForm;
