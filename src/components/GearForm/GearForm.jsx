import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./GearForm.scss";

const GearForm = () => {
  const [gearData, setGearData] = useState([]);
  const [selectedGear, setSelectedGear] = useState('');
  const [purchaseDate, setPurchaseDate] = useState('');
  const [frequency, setFrequency] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [purchaseLink, setPurchaseLink] = useState('');
  const [error, setError] = useState('');

  const apiUrl = import.meta.env.VITE_APP_URL;

  useEffect(() => {
    axios.get(`${apiUrl}/gear`)
      .then(response => {
        setGearData(response.data);
      })
      .catch(err => {
        setError('Error fetching gear data');
      });
  }, [apiUrl]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!selectedGear || !purchaseDate || !frequency) {
      setError('Please fill in all the fields.');
      return;
    }

    try {
      const response = await axios.post(`${apiUrl}/gear/${selectedGear}/expiry_date`, {
        purchase_date: purchaseDate,
        usage_frequency: frequency,
      });

      const calculatedExpiryDate = response.data.expiry_date;

      const expiryDateObj = new Date(calculatedExpiryDate);
      const currentDate = new Date();
      const diffInTime = expiryDateObj - currentDate;
      const diffInDays = diffInTime / (1000 * 3600 * 24);

      if (diffInDays <= 365) {
        const linkResponse = await axios.get(`${apiUrl}/gear/${selectedGear}/purchase_link`);
        setPurchaseLink(linkResponse.data.purchase_link);
      }

      setExpiryDate(calculatedExpiryDate);
      setError('');

    } catch (err) {
      setError('Error calculating expiry date');
    }
  };

  return (
    <section className="container">
      <h2>Gear Expiry Date Calculator</h2>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="form__item">
            <label htmlFor="gear">Gear: </label>
            <select 
              id="gear" 
              value={selectedGear} 
              onChange={(e) => setSelectedGear(e.target.value)} 
            >
              <option value="">Select Gear</option>
              {gearData.map((gear) => (
                <option key={gear.gear} value={gear.gear}>
                  {gear.gear}
                </option>
              ))}
            </select>
          </div>

          <div className="form__item">
            <label htmlFor="purchase_date">Purchase Date: </label>
            <input 
              type="date" 
              id="purchase_date" 
              value={purchaseDate} 
              onChange={(e) => setPurchaseDate(e.target.value)} 
            />
          </div>

          <div className="form__item">
            <label>Usage Frequency:</label>
            <div>
              {Object.keys(gearData.find((gear) => gear.gear === selectedGear)?.usage_frequency || {}).map((key) => (
                <div key={key}>
                  <input 
                    type="radio" 
                    id={key} 
                    name="frequency" 
                    value={key}
                    onChange={(e) => setFrequency(e.target.value)} 
                  />
                  <label htmlFor={key}>{key}</label>
                </div>
              ))}
            </div>
          </div>

          <div className="form__button-div">
            <button className="form__button" type="submit">Submit</button>
          </div>
        </form>
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {expiryDate && (
        <div>
          <h3>Calculated Expiry Date: {expiryDate}</h3>
          {purchaseLink && <p>Time to climb with something new! <a href={purchaseLink} target="_blank">Purchase link here </a></p>}
        </div>
      )}
    </section>
  );
};

export default GearForm;

