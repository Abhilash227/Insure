import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import "./signUpPage.scss";
import { InsuranceService } from "../../Services/InsuranceService";




const SignUpPage = () => {

  const [dob, setDob] = useState('');
  // const [age, setAge] = useState(null);

  const[state,setState]=useState({
    user:{
        "UserName":"",
        "Email":"",
        "Password":"",
        "Mobile":"",
        "Age":0,
        "Flag":0,
        "PackageLevel":"base",
        "HealthPremium":0,
        "Tenure":0,
        "OTP":""
    }
});

let {user}=state;
let navigate=useNavigate();

function updateInput(ev){
    debugger;
    setState({
        ...state,user:{
            ...state.user,[ev.target.name]:ev.target.value
        }
    })
}

function updateDate(ev){
  setDob(ev.target.value);
  let age=calculateAge(ev.target.value);
  alert(age);
  setState({
    ...state,user:{
        ...state.user,["Age"]:age
    }
})
}
function calculateAge(birthdate) {
  // Convert the birthdate string to a Date object
  const birthDate = new Date(birthdate);

  // Get the current date
  const currentDate = new Date();

  // Calculate the age
  const age = currentDate.getFullYear() - birthDate.getFullYear();

  // Check if the birthdate has occurred this year
  if (
    currentDate.getMonth() < birthDate.getMonth() ||
    (currentDate.getMonth() === birthDate.getMonth() &&
      currentDate.getDate() < birthDate.getDate())
  ) {
    age--; // Subtract one year if the birthdate hasn't occurred yet this year
  }

  return age;
}

function onSubmit(ev){
    ev.preventDefault();
    // alert(user.Age);
    //alert(user.UserName+" "+user.Flag+" "+user.Email+" "+user.Password);

    // let isValid = true;

    //Name Validation
    // if(user.name.length<3){
    //   isValid=false;
    //   setErrors({ ...errors, UserName: "Name must be atleast 3 characters"});
    // }

    // if(!user.Email.includes("@"))
    // {
    //   isValid= false;
    //   setErrors({ ...errors, Email: "Email must be valid mail address"});

    // }
    // if(!user.Password.length<8)
    // {
    //   isValid= false;
    //   setErrors({ ...errors, password: "Password must be atleast 8 characters"});

    // }

   
    InsuranceService.addUser(user).then((res)=>{
        alert("User added successfully");
        navigate('/SignInPage');
    })
  
  }



  return (
    <div className="sign-up-page">
      <h1 className="title">Register</h1>

      <form onSubmit={onSubmit}>
        <div className="input-container">

        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="UserName"
          value={user.UserName}
          onChange={updateInput}
          required
        />
        {/* {errors.UserName && <span className="error">{errors.UserName}</span>} */}
        </div>
       
       
        <div className="input-container">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="Email"
          value={user.Email}
          onChange={updateInput}
          required
        />
        </div>
        <div className="input-container">
        <label htmlFor="number">Mobile</label>
        <input
          type="number"
          id="mobile"
          name="Mobile"
          value={user.Mobile}
          onChange={updateInput}
          required
        />
        </div>
        {/* {errors.Email && <span className="error">{errors.Email}</span>} */}

        <div className="input-container">
        <label htmlFor="age">Date Of Birth</label>
        <input
          type="date"
          id="age"
          name="Age"
          value={dob}
          onChange={updateDate}
          required
        />
        </div>
       
        
        <div className="input-container">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="Password"
          value={user.Password}
          onChange={updateInput}
          required
        />
        {/* {errors.Password && <span className="error">{errors.Password}</span>} */}
        </div>
      
        
        <div className="button-container"><button type="submit"  >Sign Up</button></div>
        
      </form>

      <p>
        Already have an account? <Link className="link" to="/SignInPage">Sign in</Link>
      </p>
    </div>
  );
};

export default SignUpPage;