import React,{useState,useEffect} from 'react'
import {images} from '../../images'
import { Link } from 'react-router-dom';
import { InsuranceService } from '../../Services/InsuranceService';
import Insurance from '../health-insurance/Insurance';
import './dependentLists.css'
 function Feature() {
    const [state, setstate] = useState({
        users: []
      })
      const [premium, setPremium] = useState(0);
      useEffect(() => {
        async function getData() {
          const res = await InsuranceService.getUserId(3);
          setstate({
            ...state, users: res.data
          })
        }
        getData();
      }, []);
      let { users } = state;
    
      const calculatePremium = () => {
    
        const basePremium = 5000;
    
        let temp = 0;
    
        users.forEach((e) => {
    
          const agePremium = e.DependentAge * 100;
    
          const totalPremium = basePremium + agePremium;
    
          temp = temp + totalPremium
    
          // alert(temp);
    
          // alert(temp);
    
        })
    
        setPremium(temp);
    
        // alert(premium);
    
        // alert(tPremium);
    
      };
    
      // useEffect(()=>{
      //   async function getData(){
      //     const res=await InsuranceService.getAllDependents();
      //     setstate({  
      //       ...state,users:res.data
      //     })
      //   }
      //   getData();  
      // },[]);
      // let {users}=state;
    
    
      // alert(employees[0].Name);
  return (
    <>
    <div>
      <div>
        <a href='' style={{textDecoration:'none',color:'brown'}}><h2 style={{marginLeft:'35px',fontSize:'30px', fontWeight:'bold'}}>Features</h2></a>
        <div className='card' style={{display:'inline-block', width:'330px', margin:'10px 35px',padding:'20px'}}>
            <div style={{minHeight:'300px'}}>
                <img src={images.featurebasic1} style={{marginBottom:'20px'}}></img>
                <h3>Restore Benefit</h3>
                <p>Restore  your balance Sum Inusred(SI) up to 100% of the base SI once in a policy year if exhausted</p>
            </div>
        </div>
        <div className='card' style={{display:'inline-block', width:'330px', margin:'20px 35px',padding:'20px'}}>
            <div style={{minHeight:'300px'}}>
                <img src={images.featurebasic2} style={{marginBottom:'20px', maxHeight:'200px'} }></img>
                <h3>Convalescence Benefit</h3>
                <p>Covers loss of income in case of an extended hospital stay by providing a pre-fixed amount for recovery.</p>
            </div>
        </div>
        <div className='card' style={{display:'inline-block', width:'330px', margin:'20px 35px',padding:'20px'}}>
            <div style={{minHeight:'300px'}}>
                <img src={images.featurebasic3} style={{marginBottom:'20px'}}></img>
                <h3>Surface Ambulance</h3>
                <p>Covers expences for transport by ambulance to hospital for treatment to a max of 10000 for each hospitalisation.</p>
            </div>
        </div>
      </div>

      <div>
        {/* <a href='' style={{textDecoration:'none',color:'gold'}}><h2 style={{marginLeft:'35px',fontSize:'30px'}}>Gold</h2></a> */}
        <div className='card' style={{display:'inline-block', width:'330px', margin:'20px 35px',padding:'20px'}}>
            <div style={{minHeight:'300px'}}>
                <img src={images.featuregold1} style={{marginBottom:'20px',maxHeight:'200px'}}></img>
                <h3>Wellness Program</h3>
                <p>Get rewards by opting for wellness programs that will help you assess your health satus and improve your overall wellbeing.</p>
            </div>
        </div>
        <div className='card' style={{display:'inline-block', width:'330px', margin:'20px 35px',padding:'20px'}}>
            <div style={{minHeight:'300px'}}>
                <img src={images.featuregold2} style={{marginBottom:'20px', maxHeight:'190px'} }></img>
                <h3>Health Checkup</h3>
                <p>We will cover the cost of health checkup once a year on a cashless basis starting from one year, upto 0.5% of the Sum Insured(SI). </p>
            </div>
        </div>
        <div className='card' style={{display:'inline-block', width:'330px', margin:'20px 35px',padding:'20px'}}>
            <div style={{minHeight:'300px'}}>
                <img src={images.featuregold3} style={{marginBottom:'20px'}}></img>
                <h3>Guaranteed NCB</h3>
                <p>For every claim-free year, 20%(upto a max of 100%) extra Sum Insured(SI) awarded to you over the base Sum Insured (SI) amount.</p>
            </div>
        </div>
      </div>
       
      <div>
        {/* <a href='' style={{textDecoration:'none',color:'grey'}}><h2 style={{marginLeft:'35px',fontSize:'30px'}}>Platinum</h2></a> */}
        <div className='card' style={{display:'inline-block', width:'330px', margin:'20px 35px',padding:'20px'}}>
            <div style={{minHeight:'300px'}}>
                <img src={images.featureplatinum1} style={{marginBottom:'20px',maxHeight:'200px'}}></img>
                <h3>Anywhere Cashless</h3>
                <p>No more waiting for claiming refunds. Get quality medical treatment without any financial stress. Inform us one day before to avail of cashless treatment.</p>
            </div>
        </div>
        <div className='card' style={{display:'inline-block', width:'330px', margin:'20px 35px',padding:'20px'}}>
            <div style={{minHeight:'300px'}}>
                <img src={images.featureplatinum3} style={{marginBottom:'20px', maxHeight:'200px'} }></img>
                <h3>Daycare Treatment</h3>
                <p>Covers medical surgeries and procedures that requires less than 24 hours of hospitalisation (including radiotherapy & chemotherapy)</p>
            </div>
        </div>
        <div className='card' style={{display:'inline-block', width:'330px', margin:'20px 35px',padding:'20px'}}>
            <div style={{minHeight:'300px'}}>
                <img src={images.featureplatinum2} style={{marginBottom:'20px'}}></img>
                <h3>Pre and Post Hospitality</h3>
                <p>You can claim 2 months(60 days) medical expenses incurred before hospitalisation and 6 months(180 days) after hospitalisation.</p>
            </div>
        </div>
      </div>
    </div>
    <div>
    <Link to="/add-dependent">
      <button className='add'>AddDependent</button>
    </Link>
  </div>
  <div>
    {
      users.map((e) => <Insurance user={e} disabled='true' />)
    }
  </div>

  <div>
    <Link to="/all-packages">
      <button className='add'>Next</button>
    </Link>
  </div>
    </>
  )
}

export default Feature