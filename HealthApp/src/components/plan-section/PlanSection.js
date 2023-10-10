import React, { useState, useEffect } from 'react';
import PlanCard from './PlanCard';
import './plan.css'
import Insurance from '../health-insurance/Insurance';
import { InsuranceService } from '../../Services/InsuranceService';
// import { link, use } from '../../../../RestAPI/routes/emailRoutes';
import {navigate, useNavigate } from 'react-router-dom';
// Import the stylesheet

const PlanSection = ({ name, price, description, cardCount, cardData }) => {
  const [state, setstate] = useState({
    users: []
  })
  const [pack, setPack] = useState("")
  const [premium, setPremium] = useState(0);
  const [count, setCount] = useState(0);
  const [userCount,setUserCount]=useState(0);

  useEffect(() => 
  {
    async function getUserData() 
    {
      const res = await InsuranceService.getUserId(3);
      if (res.data.length > 0) 
      {
        setCount(1);
        setstate({
          ...state, users: res.data
        })
      }
    }
    async function getUserCount() {
      const res= await InsuranceService.getUserCount();
      setUserCount(res.data[0].Column0);
    }
    async function getPack()
     {
      const res = await InsuranceService.getPackageLevel();
      // alert(res.data[0].UserName);
      setPack(res.data[0].PackageLevel);
    }
    getUserCount();
    getPack();
    getUserData();
  }, []);
  let { users } = state;
  let { pres } = premium;
  // let level = ;
  let navigate = useNavigate();
  const calculatePremium = (level) => 
  {
    let temp = 0;
    // let count = 0;
    let totalPremium = 0;
    let agePremium = 0;
    let basePremium = 0;
    // alert(level);
    if (level == 'base') {
      basePremium = 5000;
    }
    else if (level == 'gold') {
      basePremium = 7500;
    }
    else {
      basePremium = 9000;
    }
    if (count == 1) 
    {
      users.forEach((e) => {
        // alert(level);
        // userId=e.PackageLevel;
        // alert(userId);
        if (level == 'base') {
          agePremium = e.DependentAge * 100;
        }
        else if (level == 'gold') {
          agePremium = e.DependentAge * 150;
        }
        else {
          agePremium = e.DependentAge * 250;
        }
        // if (count == 0) {

        //     totalPremium = basePremium + agePremium;
        // }
        // else {
        //     totalPremium = agePremium;
        // }
        temp = temp + agePremium
        // console.log(temp);
        // count++;
        // alert(temp);

        // alert(temp);
      })
    }
    temp = temp + basePremium;
    // alert(temp);
    // setPremium(temp);
    InsuranceService.updatePremium(temp);
  }
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
    const onHandleClick = () => {
        let names = name.split(" ");
      // alert(names[0].toLowerCase());
      InsuranceService.updatePackage(names[0].toLowerCase());
      calculatePremium(names[0].toLowerCase());
      // alert(premium);
      navigate('/thank-you');
      
    }
    return (
      <div className="plan-section">
        <button className="buy-button" onClick={onHandleClick} >Buy {name}</button>
        <div className="card-container">{renderCards()}</div>
      </div>
    );
  };


  export default PlanSection;