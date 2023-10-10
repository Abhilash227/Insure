import React from 'react';
import { Link } from 'react-router-dom';
import './insurancecard.scss';


const InsuranceCard = ({ type, description, linkTo , image}) => {
  return (
    <Link underline='none' to={linkTo} className="card insurance-card">
      <div className="card-body">
        <p><img src={image} alt={type} /></p>
        <h3 className="card-title">{type}</h3>
        <p className="card-text">{description}</p>
        <i className="fas fa-shield-alt"></i>
      </div>
    </Link>
  );
};

export default InsuranceCard;