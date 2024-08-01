import React, { useState } from 'react';
import './CreateCampaign.css';

function CreateCampaign() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [goalAmount, setGoalAmount] = useState('');
  const [image, setImage] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    const newCampaign = {
      title,
      description,
      goalAmount,
      imageUrl: image ? URL.createObjectURL(image) : '',
      name,
      email,
    };
    console.log(newCampaign);
    // Reset form fields
    setTitle('');
    setDescription('');
    setGoalAmount('');
    setImage(null);
    setName('');
    setEmail('');
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className="create-campaign-container">
      <h1>Create a New Campaign</h1>
      <form onSubmit={handleSubmit} className="create-campaign-form">
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Goal Amount ($):</label>
          <input
            type="number"
            value={goalAmount}
            onChange={(e) => setGoalAmount(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Upload Image:</label>
          <input type="file" accept="image/*" onChange={handleImageChange} required />
        </div>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">Create Campaign</button>
      </form>
    </div>
  );
}

export default CreateCampaign;
