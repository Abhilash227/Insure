import React from 'react'
import PlanCard from './PlanCard';
import './plan.css'

export default function NoLogin({ name, price, description, cardCount, cardData }) {
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
      return (
        <div className="plan-section">
          <button className="buy-button">{name}</button>
          <div className="card-container">{renderCards()}</div>
        </div>
      );
}