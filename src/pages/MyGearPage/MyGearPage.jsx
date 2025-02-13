import React, { useState } from 'react';
import axios from 'axios';

const MyGearPage = () => {
  const [gear, setGear] = useState({
    name: '',
    type: '',
    purchaseDate: '',
    usageFrequency: '',
    usageLocation: '',
  });

  const handleInputChange = (e) => {
    setGear({ ...gear, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/gear', gear)
      .then((response) => console.log(response))
      .catch((error) => console.error('Error adding gear:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Gear Name" onChange={handleInputChange} required />
      <input type="text" name="type" placeholder="Gear Type" onChange={handleInputChange} required />
      <input type="date" name="purchaseDate" onChange={handleInputChange} required />
      <input type="text" name="usageFrequency" placeholder="Usage Frequency" onChange={handleInputChange} required />
      <select name="usageLocation" onChange={handleInputChange} required>
        <option value="Indoor">Indoor</option>
        <option value="Outdoor">Outdoor</option>
      </select>
      <button type="submit">Add Gear</button>
    </form>
  );
};

export default MyGearPage;
