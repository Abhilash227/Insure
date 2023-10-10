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

      // alert(temp);

      // alert(temp);

    })

    setPremium(temp);

    // alert(premium);

    // alert(tPremium);

  };

  // useEffect(()=>{
  //   async function getData(){
  //     const res=await InsuranceService.getAllDependents();
  //     setstate({  
  //       ...state,users:res.data
  //     })
  //   }
  //   getData();  
  // },[]);
  // let {users}=state;


  // alert(employees[0].Name);
  // const contactNames = contacts.map((c)=><tr>{c.fullName}</tr>)
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
      {/* <div>
        <button className='add' onClick={calculatePremium}>Calculate Premium</button>
      </div>
      <div>
        The Total Premium is:{premium}
      </div> */}

      
      {/* {
      users.filter(user => user.Flag==3).map(filteredusers => (
    <div>
      <Insurance user={filteredusers} disabled='true'/>
    </div>
    
  ))} */}

    </>
  )
}
