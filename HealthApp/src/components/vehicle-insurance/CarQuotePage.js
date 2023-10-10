import React, { useState,useEffect } from 'react';
import { InsuranceService } from '../../Services/InsuranceService';

import { useNavigate} from 'react-router-dom';
import "./bikequote.scss";

const CarQuotePage = () => {
  const[state,setState]=useState({
    vehicle:{
      "RegistrationNumber":"",
      "Model":"",
      "Year":0,
      "Type":"FourWheeler",
      "UserId":0,
      "VehiclePremium":0,
      "VehicleFlag":0,
    }
});

const navigate=useNavigate();
const [error,setError]=useState("");

function updateInput(ev){
    debugger;
    setState({
        ...state,vehicle:{
            ...state.vehicle,[ev.target.name]:ev.target.value
        }
    })
}


  const [userState,setUser]=useState({
    users:[]
})
const [vehicleState,setVehicle]=useState({
  vehicles:[]
})


useEffect(()=>{

    async function getData(){
        const res=await InsuranceService.getAllUsers();
        setUser({  
            ...userState,users:res.data
        })
    }
    async function getVehicleDetails(){
      const res=await InsuranceService.getVehicles();
      setVehicle({  
          ...vehicleState,vehicles:res.data
      })
  }
    getVehicleDetails();
    getData();  
},[]);
let {users}=userState;
let {vehicle}=state;
// let{vehicles}=vehicleState;

function onSubmit(ev){
  let flag=0;
    vehicleState.vehicles.map((e)=>{
      console.log(e.RegistrationNumber);
      if(e.RegistrationNumber==vehicle.RegistrationNumber)
      {
        flag=1;
      }
    })
    users.map((e)=>{
        if(e.Flag==3)
        {
            vehicle.UserId=e.UserId;
        }      
    })
     ev.preventDefault();
     if(flag==0)
     {
      InsuranceService.addVehicle(vehicle).then((res)=>{
        navigate('/car-premium');
    })
     }
     else{
        setError("Vehicle with the Registration number already exists");
     }
  }

  return (
    <div className="carinsurance">
      <h1 className="title"> Car Insurance Quote</h1>
      <br/>
      <form onSubmit={onSubmit}>
        <label>
          Registration Number:
          <input
            type="text"
            name="RegistrationNumber"
            value={vehicle.RegistrationNumber}
            onChange={updateInput}
            required
          />
        </label>
        <span style={{color: 'red'}}>{error}</span>
        <hr />
        <label>
          Vehicle Model Name:
          <input
            type="text"
            name="Model"
            value={vehicle.Model}
            onChange={updateInput}
            required
          />
        </label>
        <hr />
        <hr />
        <button style={{backgroundColor:"white" , color:"hsl(256, 26%, 20%)"}} type="submit"><b>Get Car Quote</b></button>
        <hr/>
      </form>
    </div>
  );
};

export default CarQuotePage;
