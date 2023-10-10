import React, { useEffect,useState } from "react";
import "./banner.scss";
import { images } from "../../images";
import { Link } from "react-router-dom";
import { InsuranceService } from "../../Services/InsuranceService";


const Banner = () => {
  const [count,setCount]=useState(0);
  useEffect(()=>{
    async function getUserCount(){
      const res=await InsuranceService.getUserCount();
      // alert(res.data[0].Column0);
      setCount(res.data[0].Column0);
    }
    getUserCount();
  },[])
  if(count==0)
  {
    return (
      <div>
        <div className="insurance-category">
          <div className="container">
            <h2 className="title1 title1--mod">Types of Insurance We Provide: </h2>
            <div className="insurance-category__content">
              <div className="category1" style={{ border: '2px double hsl(256, 26%, 20%)', padding: '10px', borderRadius: '10px' }}>
                <h2 style={{display:"inline-block" ,fontSize:"30px", marginRight:'100px'}}>Health Insurance</h2 >
                <img src={images.category1} alt="" style={{height:''}}/>
                <p>Health Insurance is like a saftey net for the wellbeing. Its a financial cushion that catches you when unexpected health challenges knock you off your feet.
                </p>
                <Link to="/no-login">
                <button style={{marginLeft:'260px'}}>Click To Know More</button>
                </Link>
              </div>
              <div className="category2" style={{ border: '2px double hsl(256, 26%, 20%)', padding: '10px', borderRadius: '10px' }}>
                <h2 style={{display:"inline-block" ,fontSize:"30px", marginRight:'100px'}}>Vehicle Insurance</h2 >
                  <img src={images.category2} alt="" />
                <p>Vehicle Insurance is like a security blanket for your vehicles, ensuring that you are covered in the unpredictable journey of life on road.
                </p>
                <Link to="/SignInPage">
                <button style={{marginLeft:'260px'}}>Click To Know More</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  else{
  return (
    <div>
      <div className="insurance-category">
        <div className="container">
          <h2 className="title1 title1--mod">Types of Insurance We Provide: </h2>
          <div className="insurance-category__content">
            <div className="category1" style={{ border: '2px double hsl(256, 26%, 20%)', padding: '10px', borderRadius: '10px' }}>
              <h2 style={{display:"inline-block" ,fontSize:"30px", marginRight:'100px'}}>Health Insurance</h2 >
              <img src={images.category1} alt="" style={{height:''}}/>
              <p>Health Insurance is like a saftey net for the wellbeing. Its a financial cushion that catches you when unexpected health challenges knock you off your feet.
              </p>
              <Link to="/features">
              <button style={{marginLeft:'260px'}}>Click To Know More</button>
              </Link>
            </div>
            <div className="category2" style={{ border: '2px double hsl(256, 26%, 20%)', padding: '10px', borderRadius: '10px' }}>
              <h2 style={{display:"inline-block" ,fontSize:"30px", marginRight:'100px'}}>Vehicle Insurance</h2 >
                <img src={images.category2} alt="" />
              <p>Vehicle Insurance is like a security blanket for your vehicles, ensuring that you are covered in the unpredictable journey of life on road.
              </p>
              <Link to="/vehicle-insurance">
              <button style={{marginLeft:'260px'}}>Click To Know More</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  }
};

export default Banner;