import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { InsuranceService } from '../../Services/InsuranceService';
import Insurance from './Insurance';
import './dependentList.css'

export default function DependentList() {
  const [state, setstate] = useState({
    users: []
  })
  const [premium, setPremium] = useState(0);
  useEffect(() => {
    async function getData() {
      const res = await InsuranceService.getUserId(3);
      setstate({
        ...state, users: res.data
      })
    }
    getData();
  }, []);
  let { users } = state;

  const calculatePremium = () => {

    const basePremium = 5000;

    let temp = 0;

    users.forEach((e) => {
      const agePremium = e.DependentAge * 100;
      const totalPremium = basePremium + agePremium;
      temp = temp + totalPremium
    })

    setPremium(temp);
  };

  return (
    <>
      <div>
        <Link to="/add-dependent">
          <button className='add'>AddDependent</button>
        </Link>
      </div>
      <div>
        {
          users.map((e) => <Insurance user={e} disabled='true' />)
        }
      </div>
      <div>
        <Link to="/health-insurance">
          <button className='add'>Next</button>
        </Link>
      </div>
    </>
  )
}
