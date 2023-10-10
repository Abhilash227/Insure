import React from "react";
import "./hero.scss";
import { images } from "../../images";
import { Link } from "react-router-dom";
//import SendSms from "../../components/sms/SendSms";

const Hero = () => {
  return (
    <div>
      <div className="hero" >
        <div className="right-top-image">
          <picture>
            <source
              media="(max-width:767px)"
              srcSet={images.intro_right_mobile}
            />
            <img src={images.intro_right} alt="" />
          </picture>
        </div>
        <div className="hero__wrapper.container">
          <div className="hero__content">
            <h1 className="title1">
              Humanizing <br /> Your Insurance.
            </h1>
            <p className="hero__text">
              Get your Health or Vehicle Coverage easier and faster!!!<br/>
              We blend our expertise AND technology to help you find the plan that's right for you.Ensure you and your loved ones are protected.
            </p>
             <Link to="/my-plans"> 
            <button className="btn" style={{backgroundColor:'white' ,color:'hsl(256, 26%, 20%)', fontSize:'15px', fontWeight:'800px', letterSpacing:'4px'}}>Know More</button>
             </Link>
          </div>
          <div className="hero__image">
            <picture>
              <source
                media="(max-width:767px)"
                srcSet={images.intro_mobile}
              />
              <img src={images.intro_desktop} alt="" />
            </picture>
          </div>
        </div>
        {/* <div className="left-bottom-image">
          <picture>
            <source
              media="(max-width:767px)"
              srcSet={images.intro_left_mobile}
            />
            <img src={images.intro_left} alt="" />
          </picture>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;