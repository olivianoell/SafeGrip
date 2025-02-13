import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HomePage = () => {
  const [gearData, setGearData] = useState([]);

  useEffect(() => {
    // Fetch gear data from API
    axios.get('/api/gear')
      .then((response) => setGearData(response.data))
      .catch((error) => console.error('Error fetching gear:', error));
  }, []);

  return (
    <div className="home-page">
      <h1>Welcome to SafeGrip</h1>
      <div className="gear-list">
        {gearData.map((gear) => (
          <div key={gear.id} className="gear-item">
            <h2>{gear.name}</h2>
            <p>Type: {gear.type}</p>
            <p>Expiration Date: {gear.expirationDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
