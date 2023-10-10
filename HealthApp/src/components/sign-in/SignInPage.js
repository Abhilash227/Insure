import React, { useState,useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signInPage.scss";
import { InsuranceService } from "../../Services/InsuranceService";



const SignInPage=()=>{

  const [errorMessage, setErrorMessage] = useState('');

const[state,setState]=useState({
  detail:{
      "Flag":"2",
      "Email":"",
      "Password":""

  }
});

let {detail}=state;
let navigate=useNavigate();

function updateInput(ev){
  debugger;
  setState({
      ...state,detail:{
          ...state.detail,[ev.target.name]:ev.target.value
      }
  })
}


function onSubmit(ev){
  // ev.preventDefault();
  // InsuranceService.addDependent(dependent).then((res)=>{
  //     alert("User added successfully");
  //     navigate('/');
// })
  // alert(detail.Email);
  // alert(detail.Password);

  users.map((u)=>{
    if(u.Email===detail.Email)
    {
      // alert("User Found");
      if(u.Password===detail.Password)
      {
        //alert("Login Successful");
        setErrorMessage('');
        InsuranceService.updateUsers(u.UserId,3)
        // navigate('/AddDependent');

        navigate('/');
        
      }
      else{
        setErrorMessage('Invalid Username or Password');
      }
      setErrorMessage('Invalid Username or Password');
    }
    // else{
    //   alert("User not found");
      
    // }
  })

}
const [cred,setCred]=useState({
users:[]
})

useEffect(()=>{
async function getData(){
    const res=await InsuranceService.getAllUsers();
    setCred({  
        ...cred,users:res.data
    })
}
getData();  
},[]);
let {users}=cred;
  return (
    <div className="sign-in-page">
       

      <h1 className="title"> Sign In</h1>
      <form onSubmit={onSubmit}>
        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="Email"
            value={detail.Email}
            onChange={updateInput}
            required
          />
        </div>

        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="Password"
            value={detail.Password}
            onChange={updateInput}
            required
          />
        </div>
        <p style={{color:'white'}}>
        <Link to="/otp-form" >Forgot Password</Link>
        </p>
        <span style={{color: 'red'}}>{errorMessage}</span>
        <div className="button-container">
          <button type="btn">Sign In</button>
        </div>

      </form>

      <p>
        Don't have an account? <Link to="/SignUpPage">Sign up</Link>
      </p>
    </div>
  );
};

export default SignInPage;