

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage.jsx';
import CreateCampaign from './CreateCampaign';
import ViewCampaigns from './ViewCampaigns.jsx';
import MicroinsurancePolicyPage from './MicroinsurancePolicyPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/create-campaign" element={<CreateCampaign />} />
        <Route path="/view-campaigns" element={<ViewCampaigns />} />
        <Route path="/microinsurance" element={<MicroinsurancePolicyPage />} />
        
      </Routes>
    </Router>
  );
}

export default App;

