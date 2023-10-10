import React from 'react';

import PlanCard from './PlanCard';
import { useNavigate } from 'react-router-dom';

// Import the stylesheet

 

const PlanSection = ({ name, price, description, cardCount, cardData }) => {
let navigate=useNavigate();
  const renderCards = () => {

    const cards = [];

    if (cardData) {

      for (let i = 0; i < cardCount; i++) {

        const cardInfo = cardData[i] || {};

        cards.push(

          <PlanCard

            key={i}

            price={price}

            description={description}

            coverage={cardInfo.coverage}

            details={cardInfo.details}

          />

        );

      }

    } else {

      for (let i = 1; i <= cardCount; i++) {

        cards.push(<PlanCard key={i} price={price} description={description} />);

      }

    }

    return cards;

  };

 
  function onSubmit()
  {
        navigate('/SignInPage')
  }
  return (

    <div className="plan-section">

     

      <button className="buy-button" onClick={onSubmit}>Buy {name}</button>

      <div className="card-container">{renderCards()}</div>

    </div>

  );

};

 

export default PlanSection;