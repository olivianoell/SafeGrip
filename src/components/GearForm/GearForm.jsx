import { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

const GearForm = () => {

    const [gear, setGear] = useState('');
    const [purchaseDate, setPurchaseDate] = useState('');
    const [usageFrequency, setUsageFrequency] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [purchaseLink, setPurchaseLink] = useState('');
    
    const fetchData = async () => {
        try {
          const response = await axios.get(`${API_URL}/gear`);
          setGear(response.data);
        } catch (err) {
          console.error("Error fetching gear:", err);
        }
    };
        useEffect(() => {
            fetchData();
        }, []);

    const gearOptions = [
        "Harness", 
        "Rope", 
        "Nylon-Sling", 
    ];

    const usageFrequencyOptions = [
        "Unused and correctly stored", 
        "Used once or twice a year", 
        "Used once a month", 
        "Used several times a month", 
        "Used every week", 
        "Used almost daily"
    ];

    const handleSubmit = async () => {
        try {
            const response = await axios.post(`${API_URL}/myGear`, {
                gear: gear,
                purchase_date: purchaseDate,
                usage_frequency: usageFrequency,
                expiry_date: expiryDate,
                purchase_link: purchaseDate
            });

            setExpiryDate(response.data.expiry_date);
            setPurchaseLink(response.data.purchase_link);

        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <section>
            <div>
                <label>Gear:</label>
                <select value={gear} onChange={(e) => setGear(e.target.value)}>
                    <option value="">Select Gear</option>
                    {gearOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select>
            </div>

            <div>
                <label>Purchase Date:</label>
                <input 
                    type="date" 
                    value={purchaseDate} 
                    onChange={(e) => setPurchaseDate(e.target.value)} 
                />
            </div>

            <div>
                <label>Usage Frequency:</label>
                <select value={usageFrequency} onChange={(e) => setUsageFrequency(e.target.value)}>
                    <option value="">Select Frequency</option>
                    {usageFrequencyOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select>
            </div>

            <button onClick={handleSubmit}>Submit</button>

            <div>
                <h2>Expiry Date: {expiryDate}</h2>
                <h2>Purchase Link: <a href={purchaseLink}>{purchaseLink}</a></h2>
            </div>
        </section>
    );
};

export default GearForm;
