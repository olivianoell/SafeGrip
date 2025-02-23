import React, { useState, useEffect } from 'react';
import DeleteModal from '../DeleteModal/DeleteModal';
import "./UserGear.scss";

const UserGear = () => {
  const [userGearData, setUserGearData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [gearToDelete, setGearToDelete] = useState(null);
  const apiUrl = import.meta.env.VITE_APP_URL;

  useEffect(() => {
    const fetchUserGearData = async () => {
      try {
        const response = await fetch(`${apiUrl}/user/UserGear`);
        if (response.ok) {
          const data = await response.json();
          setUserGearData(data.gearData || []);
        } else {
          console.error("Failed to fetch user gear data");
        }
      } catch (error) {
        console.error("Error fetching user gear data:", error);
      }
    };

    fetchUserGearData();
  }, []);

  const handleDeleteClick = (gear) => {
    setGearToDelete(gear);
    setIsModalOpen(true);
  };

  const handleDelete = async () => {
    if (!gearToDelete) return;

    try {
      const response = await fetch(`${apiUrl}/user/deleteGear`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(gearToDelete),
      });

      if (response.ok) {
        setUserGearData(prevData =>
          prevData.filter(item => item.gear !== gearToDelete.gear || item.purchase_date !== gearToDelete.purchase_date)
        );
        setIsModalOpen(false);
      } else {
        console.error("Failed to delete gear");
      }
    } catch (error) {
      console.error("Error deleting gear:", error);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setGearToDelete(null); 
  };

  return (
    <section className="container">
      <h2>Submitted Gear Details</h2>
      {userGearData.length === 0 ? (
        <p>No gear data available.</p>
      ) : (
        <ul className="container__ul">
          {userGearData.map((gear, index) => (
            <li className="container__card" key={index}>
              <h3 className="container__gear">{gear.gear}</h3>
              <p>Purchase Date: {gear.purchase_date}</p>
              <p>Usage Frequency: {gear.usage_frequency}</p>
              <p>Expiry Date: {gear.expiry_date}</p>
              <div className="container__button-div">
                <button className="container__button" onClick={() => handleDeleteClick(gear)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <DeleteModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onDelete={handleDelete}
        gear={gearToDelete}
      />
    </section>
  );
};

export default UserGear;
