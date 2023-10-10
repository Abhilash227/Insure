import React from 'react';
import { Link } from 'react-router-dom';

 // Import your CSS for styling


const DetailsModal = ({ isOpen, onClose, details, premium,isBikeCalculator }) => {

  if (!isOpen) return null;

 

  return (

    <div className="modal-overlay">

      <div className="modal-content">

        <span className="close-btn" onClick={onClose}>&times;</span>

        <h2>User Details & Premium</h2>
        <hr/>
        <div>
          <p><strong>Year of Purchase: </strong> {details.year}</p>
          <hr/>
          <p><strong>Vehicle Value: </strong> Rs.{details.vehicleValue}</p>
          <hr/>
          {isBikeCalculator && (
            <p><strong>Bike Premium: </strong><span className='highlight'>Rs.{premium}</span></p>
          )}
          {isBikeCalculator && details.modelType &&(
            <p><strong>Model Type: </strong> {details.modelType}</p>
          )}
            {!isBikeCalculator && (
            <p><strong>Car Premium: </strong><span className='highlight'>Rs.{premium}</span></p>
          )}
          <hr/>
          <Link to="/">
            <button type="submit">Go To Home</button>
          </Link>
        </div>
      </div>
    </div>
  );

};

 

export default DetailsModal;

 