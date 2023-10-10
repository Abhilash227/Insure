import React, { useState } from 'react';
import { InsuranceService } from '../../Services/InsuranceService';
import DetailsModal from './DetailsModal';
import './bikepremium.scss';

function BikeCalculator() {
  const [year, setYear] = useState('');
  const [vehicleValue, setVehicleValue] = useState('');
  const [premium, setPremium] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [VehicleDate,setVehicleDate]=useState('');
  const [userId,setUserId]=useState(0);


  const calculatePremium = () => {
    const yearPremium = (5/(2023-year))*200;
    const vehicleValuePremium = vehicleValue / 50;
    const totalPremium = yearPremium + vehicleValuePremium;
    const total=Math.round(totalPremium);
    alert(total);
    InsuranceService.updateVehiclePremium(total);
    InsuranceService.updateVehicle(year);
    setPremium(totalPremium.toFixed(2));
    setModalOpen(true);
  };
  async function handleSubmit(e){
    e.preventDefault();
    // InsuranceService.updateVehicle(year);
    calculatePremium();
    const res=await InsuranceService.getUserIdByFlag()
    console.log(res.data[0].UserId);
    setUserId(res.data[0].UserId);
    
    // alert(premium);
  };

  const handleCloseModal = (e) => {
    setModalOpen(false);
  }

  return (
    <div className='bikepremium'>
    <div className="calculator">
    <h1 className="title"> Bike Insurance Premium</h1>
    <br/>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="year">Year of purchase:</label>
          <input type="number" id="year" value={year} onChange={(e) => setYear(e.target.value)} min={2000} max={2023}required/>
        </div>
        <hr/>
        <div>
          <label htmlFor="vehicleValue">Vehicle Value (Rs.):</label>
          <input type="number" id="vehicleValue" value={vehicleValue} onChange={(e) => setVehicleValue(e.target.value)} required/>
        </div>
        <hr/>
        <button style={{backgroundColor:"white" , color:"hsl(256, 26%, 20%)"}} type="submit"><b>Calculate Premium</b></button>
        <hr/>
      </form>
      {premium !== null && (
        <DetailsModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        details={{year, vehicleValue}}
        premium={premium}
        isBikeCalculator={true}
        />
      )}
    </div>
    </div>
  );
}
export default BikeCalculator;