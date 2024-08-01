import React, { useState } from "react";
// import "./LandingPage.css";
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectTitle: "",
    projectDescription: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log(formData);
//   };
const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    // Navigate to the "View Campaigns" page
    navigate('/view-campaigns');
  };
  return (
    <div className="landing-page">
      <header className="header">
      <div className="header-text">
          <h1>Empower Chain</h1>
          <p>Crowd-Sourced, Block-Secured</p>
        </div>
        <div className="header-buttons">
          <button className="signup-login-button" onClick={() => navigate('/create-campaign')}>
            Sign Up / Login
          </button>
          <button className="microinsurance-button" onClick={() => navigate('/microinsurance')}>
            Microinsurance Policy
          </button>
        </div>
      </header>
      <main className="main-content">
        <h2>Start Your Fundraiser</h2>
        <form className="fundraiser-form" onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>
          <label>
            Project Title:
            <input type="text" name="projectTitle" value={formData.projectTitle} onChange={handleChange} required />
          </label>
          <label>
            Project Description:
            <textarea name="projectDescription" value={formData.projectDescription} onChange={handleChange} required />
          </label>
          <button type="submit">Start as a Fundraiser</button>
        </form>
        
      </main>
    </div>
  );
}

export default LandingPage;
