import React from 'react';
import './DeleteModal.scss';

const DeleteModal = ({ isOpen, onClose, onDelete, gear }) => {
  if (!isOpen) return null;

  return (
    <div className="delete-modal">
      <div className="delete-modal__content">
        <h2>Are you sure you want to delete this gear?</h2>
        <p>{gear.gear}</p>
        <p>Purchase Date: {gear.purchase_date}</p>
        <p>Usage Frequency: {gear.usage_frequency}</p>
        <p>Expiry Date: {gear.expiry_date}</p>
        <div className="delete-modal__buttons">
          <button onClick={onDelete}>Yes, delete it</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
