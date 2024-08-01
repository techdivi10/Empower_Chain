import React from 'react';
import './ViewCampaigns.css'; // Ensure this file exists for styling

function ViewCampaigns() {
  // Dummy data for campaigns with image URLs
  const campaigns = [
    {
      id: 1,
      title: 'NOVA: The Smart Home Assistant',
      description: 'A tech startup seeking funds for a new AI-powered home device.Housed in a sleek, modern design with a crystal-clear 7-inch touchscreen. ',
      imageUrl: 'https://a1garage.com/wp-content/uploads/2023/11/The-Evolution-of-Smart-Homes-copy-768x504.jpg', // Replace with your image URL
    },
    {
      id: 2,
      title: 'Indie Game: Pixel Quest',
      description: 'Funding the final development stages of a retro-style adventure game.Pixel Quest revolutionizes gameplay with a unique time-manipulation mechanic.',
      imageUrl: 'https://media.wired.com/photos/62feb60bcea7c0581e825cb0/master/w_960,c_limit/Fate-of-Game-Preservation-Games-GettyImages-1170073827.jpg', // Replace with your image URL
    },
    {
      id: 3,
      title: 'Ocean Cleanup Drone',
      description: 'This autonomous marvel combines cutting-edge AI with eco-friendly design. Solar-powered and relentless, it can operate for 6 months straight, tirelessly collecting up to 500kg of plastic before returning to shore.',
      imageUrl: 'https://cdn.coastalscience.noaa.gov/csmedia/2022/01/drone1-768x432.jpg', // Replace with your image URL
    },
    {
      id: 4,
      title: 'Solar Backpack for Students',
      description: "Powering Education, One Ray at a Time. it is a mobile power station that harnesses the sun's energy to keep students connected and learning. Sleek, durable, and eco-friendly.",
      imageUrl: 'https://borgenproject.org/wp-content/uploads/AAA.jpg', // Replace with your image URL
    },
    
    {
      id: 5,
      title: 'Farm to Food Bank',
      description: "Connecting local farmers with food banks to provide fresh produce.We're on a mission to create a seamless connection between local farmers and food banks, ensuring that surplus fresh produce reaches those who need it most.",
      imageUrl: 'https://d9x3r8n6.rocketcdn.me/wp-content/uploads/2023/11/HawaiiFoodbank_MidWeek_112223-1024x576.jpg.webp', // Replace with your image URL
    },
    {
      id: 6,
      title: 'Braille E-Reader',
      description: "Developing an affordable, refreshable braille display for the visually impaired. Our innovative device aims to make digital content more accessible to blind and visually impaired individuals.",
      imageUrl: 'https://abilitynet.org.uk/sites/abilitynet.org.uk/files/admin/Canute%202.jpg',
    }
  ];

  return (
    <div className="campaigns-container">
      <h1>Existing Campaigns</h1>
      <ul className="campaigns-list">
        {campaigns.map((campaign) => (
          <li key={campaign.id} className="campaign-item">
            <img src={campaign.imageUrl} alt={campaign.title} className="campaign-image" />
            <h2>{campaign.title}</h2>
            <p>{campaign.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ViewCampaigns;
