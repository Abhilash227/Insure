import React from 'react';
import Footer from "./components/footer/Footer";

import Home from "./pages/home/Home";
import In from './pages/home/in/In';
import Up from './pages/home/up/Up';
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/main.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';

import Vehicle from './pages/home/vehicle/Vehicle';
import Bike from './pages/bike/Bike';
import Car from './pages/car/Car'
import CarQuotePage from './components/vehicle-insurance/CarQuotePage';
import Carpremium from './pages/carpremium/Carpremium';
import Bikepremium from './pages/bikepremium/Bikepremium';
import DependentList from './components/health-insurance/DependentList';
import AddDependent from './components/health-insurance/AddDependent';
import Health from './pages/home/health/Health';
import ThankYou from './components/health-insurance/ThankYou';
// import AllPlans from './components/My-Plans/AllPlans';
import AllPlans from './components/My Plans/AllPlans';
import Forms from './components/Form';
import ForgotPassword from './components/sign-in/ForgotPassword'
import Feature from './components/Features/Feature';
import NewHealth from './components/new-health/NewHealth';
import AllPackages from './components/plan-section/AllPackages';
import MyPlans from './components/My Plans/MyPlans'
import NoLogin from './components/plan-section/NoLogin';
import AllPack from './components/no-login/AllPack';
//import SendSms from './components/sms/SendSms';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/SignInPage' element={<In />} />
          <Route path='/SignUpPage' element={<Up />} />
          {/* <Route path='/health-insurance' element={<health-insurance />} /> */}
          <Route path='/vehicle-insurance' element={<Vehicle />} />
          <Route path='/health-insurance' element={<Health/>}/>
          <Route path='/bike-quote' element={<Bike/>} />
          <Route path='/car-quote' element={<Car/>} />
          <Route path='/bike-premium' element={<Bikepremium/>} />
          <Route path='/car-premium' element={<Carpremium/>} />
          <Route path='/dependent-list' element={<DependentList/>} />
          <Route path='/add-dependent' element={<AddDependent/>} />
          <Route path='/thank-you' element={<ThankYou/>}/>
          <Route path='/all-plans' element={<AllPlans/>}/> 
          <Route path='/otp-form' element={<Forms/>}/>
          <Route path='/forgot-password' element={<ForgotPassword/>}/>
          <Route path='/features' element={<Feature/>}/>
          <Route path='/new-health' element={<NewHealth/>}/>
          <Route path='/all-packages' element={<AllPackages/>}/>
          <Route path='/my-plans' element={<MyPlans/>}/>
          <Route path='/no-login' element={<AllPack/>}/>


          {/* <Route path='/sendSms' element={<SendSms/>}/> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
