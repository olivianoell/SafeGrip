import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const UserGear = () => {
  const location = useLocation();
  const [expiryDate, setExpiryDate] = useState('');
  const [purchaseLink, setPurchaseLink] = useState('');

  useEffect(() => {
    if (location.state) {
      setExpiryDate(location.state.expiryDate);
      setPurchaseLink(location.state.purchaseLink);
    }
  }, [location.state]);

  return (
    <div>
      <h2>Expiry Date Results</h2>
      {expiryDate && (
        <div>
          <h3>Calculated Expiry Date: {expiryDate}</h3>
          {purchaseLink && (
            <p>
              Purchase Link: <a href={purchaseLink} target="_blank" rel="noopener noreferrer">Click here</a>
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default UserGear;

