import React, { useState,useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signInPage.scss";
import { images } from "../../images";
import { InsuranceService } from "../../Services/InsuranceService";


const ForgotPassword=()=>{
  let navigate=useNavigate();
const [state,setState]=useState({
  user:{
    "Password":"",
    "Retype":""
  }
})
const [errorMessage,setErrorMessage]=useState("");

function updateInput(ev)
{
  setState({
    ...state,user:{
        ...state.user,[ev.target.name]:ev.target.value
    }
})
}

function onSubmit()
{
  if(user.Password!=user.Retype)
  {
    setErrorMessage('Passwords does not match');
  }
  else{
    InsuranceService.updatePassword(user.Password);
    InsuranceService.updateFlagOnRetype();
    navigate('/SignInPage');
    
  }
}
let {user}=state;
  return (
    <div className="sign-in-page">
      <h1 className="title"> Sign In</h1>
      <form>
        <div className="input-container">
          <label htmlFor="email">Enter the password</label>
          <input
            type="password"
            id="password"
            name="Password"
            value={user.Password}
            onChange={updateInput}
            required
          />
           <label htmlFor="email">Confirm the password</label>
          <input
            type="password"
            id="retype"
            name="Retype"
            value={user.Retype}
            onChange={updateInput}
            required
          />
        </div>
        <span style={{color: 'red'}}>{errorMessage}</span>
        <div className="button-container">
          <button type="btn" onClick={onSubmit}>Reset Password</button>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;