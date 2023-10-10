import React from 'react';

 // Import your CSS for styling
 

const Modal = ({ isOpen, onClose, details, premium,isBikeCalculator }) => {

  if (!isOpen) return null;

 

  return (

    <div className="modal-overlay">

      <div className="modal-content">

        <span className="close-btn" onClick={onClose}>&times;</span>

        
        <div>
         
        
          <hr/>
        </div>
      </div>
    </div>
  );

};

 

export default Modal;

 