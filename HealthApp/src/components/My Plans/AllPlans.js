import React, { useState, useEffect } from 'react'
import { InsuranceService } from '../../Services/InsuranceService';
import VehicleDetail from './VehicleDetail';
import DependentDetail from './DependentDetail';
export default function AllPlans() {
  const [state, setstate] = useState({
    users: []
  })
  const [premium, setPremium] = useState(0);
  const [DependentState, setDependentState] = useState({
    dependents: []
  })
  useEffect(() => {
    async function getData() {
      const res = await InsuranceService.getUserVehicles();
      setstate({
        ...state, users: res.data
      })
    }
    async function getDependents() {
      const dep = await InsuranceService.getUserId(3);
      setDependentState({
        ...DependentState, dependents: dep.data
      })
    }
    async function getPremium() {
      const pre = await InsuranceService.getUserPremium();
      // alert(pre.data[0].HealthPremium);
      setPremium(pre.data[0].HealthPremium);
    }
    getPremium();
    getDependents();
    getData();
  }, []);

  let { users } = state;
  console.log(users);
  let { dependents } = DependentState;
  let { healthAmount } = premium;
  return (
    <>
      <div>
        <h2>Health Insurances You Applied For: </h2>
        <b>The dependents are:</b>
        {
          dependents.map((e) => <DependentDetail dependent={e} disabled='true' />)

        }
        <p>The Premium Amount is:{premium}</p>
      </div>
      <br />
      <h2>Vehicle Insurances You Applied For: </h2>
      <b> The Vehicles choosen are:</b>
      <div>
        {
          users.map((e) => <VehicleDetail user={e} disabled='true' />)
        }
      </div>
    </>
  )
}