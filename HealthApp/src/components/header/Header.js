import React, { useState,useEffect } from "react";
import "./header.scss";
import { images } from "../../images";
import { Link, Navigate } from "react-router-dom";
import { InsuranceService } from "../../Services/InsuranceService";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(true);
  const [userName,setUserName]=useState("");
  let temp=true;

  useEffect(() => {
    async function getData() {
        const res = await InsuranceService.getUserByFlag();
        // console.log(res.data[0].Flag);
        // console.log(res.data.length);
        if(res.data.length>0)
        {

          if(res.data[0].Flag==3)
          {
              temp=false;
              setUser(false);
              // console.log(temp);
          }
        }
    }
    async function getUserData()
    {
      let res=await InsuranceService.getUserName();
      if(res.data.length>0)
      {
        setUserName(res.data[0].UserName);
      }
    }
    getUserData();
    getData();
}, []);
   function handleSignIn(){
    // Sign the user in
  };

  const handleSignOut = () => {
    // Sign the user out
    // let x=temp;
    // alert(!x);
    // temp=!x;
    InsuranceService.setFlagZero();
  };


  const handleClick = e => {
    e.preventDefault();
    setOpen(!open);
  };
//alert(user);
if(user)
{
  return(
    <div>
      <div>
      <header>
        <nav className="navbar container">
          <div className="logo">
            <img src={images.logo} alt="" />
          </div>
          <ul className={open ? `nav-items active` : `nav-items`}>
              <li className="btn btn--nav-btn">
                
                <Link to="/SignInPage">
                <button onClick={handleSignIn} >Sign In</button>
                </Link>
                {/* <Link to="/">
                <button onClick={handleSignOut} >SignOut</button>
                </Link> */}

              </li>
            {/* <li className="btn btn--nav-btn">
              <Link to="/SignUpPage">
                Register
              </Link>
            </li> */}

            {/* <li className="btn btn--nav-btn">
              <Link to="SignInPage">
                Sign In
              </Link>
            </li> */}
          </ul>
          <div className="hamburger">
            <img src={images.hamburger} alt="" onClick={handleClick} />
          </div>
        </nav>
      </header>
    </div>
    </div>
  )
}
else{
  return (
    <div>
      <header>
        <nav className="navbar container">
          <div className="logo">
            <img src={images.logo} alt="" />
          </div>
          <ul className={open ? `nav-items active` : `nav-items`}>
              <li className="btn btn--nav-btn">
                
                {/* <Link to="/SignInPage">
                <button onClick={handleSignIn} >Sign In</button>
                </Link> */}
                <Link to="/">
                <button className="signoutbtn" onClick={handleSignOut}>SignOut</button>
                </Link>

              </li>
              <li>
                <a href="#" style={{textDecoration:'none', fontSize:'20px', color:'hsl(256, 26%, 20%)'}}>{userName}</a>
              </li>
            {/* <li className="btn btn--nav-btn">
              <Link to="/SignUpPage">
                Register
              </Link>
            </li>

            <li className="btn btn--nav-btn">
              <Link to="SignInPage">
                Sign In
              </Link>
            </li> */}
          </ul>
          <div className="hamburger">
            <img src={images.hamburger} alt="" onClick={handleClick} />
          </div>
        </nav>
      </header>
    </div>
  );
}
  
};

export default Header;