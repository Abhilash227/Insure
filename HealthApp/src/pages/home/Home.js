import React from "react";
import Banner from "../../components/banner/Banner";
import Hero from "../../components/hero/Hero";
import Info from "../../components/info/Info";
import "./home.scss";
import Header from "../../components/header/Header"

const Home = () => {
  return (
    <div>
      <Header/>
      <Hero />
      <div className="section1">
        <Banner/>
      </div>
      <div className="section2">
        <Info />
      </div>
    </div>
  );
};

export default Home;