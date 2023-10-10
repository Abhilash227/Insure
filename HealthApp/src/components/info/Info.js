import React from "react";
import "./info.scss";
import { images } from "../../images";

const Info = () => {
  return (
    <div>
      <div className="we-are-different">
        <div className="container">
          <h2 className="title1 title1--mod">We Are Different</h2>
          <div className="we-are-different__content">
            <div className="snappy">
              <img src={images.snappy_process} alt="" />
              <h3>Snappy Process</h3>
              <p>Our Application process can be completed in minutes, not hours.
                Dont get stuck filling in tedious forms.
              </p>
            </div>
            <div className="affordable">
              <img src={images.affordable_prices} alt="" />
              <h3>Affordable Prices</h3>
              <p>We dont want you worrying about high monthly costs.
                Our prices may be low, but we still offer the best coverage possible.
              </p>
            </div>
            <div className="people">
              <img src={images.people_first} alt="" />
              <h3>People First</h3>
              <p>Our plans aren't full of conditions and clauses to prevent payouts.
                We make sure you are covered when you need it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;