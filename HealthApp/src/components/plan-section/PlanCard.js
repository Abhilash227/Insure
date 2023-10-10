import React from 'react';
// Import the stylesheet
import './plan.css'
const PlanCard = ({ coverage, details }) => {
  return (
    <div className="plan-card">
      {coverage && <p><b>{coverage}</b></p>}
      {details && <p>{details}</p>}
    </div>
  );
};
export default PlanCard;