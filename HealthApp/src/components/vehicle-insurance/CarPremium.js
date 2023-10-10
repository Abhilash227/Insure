import React, { useState } from 'react';

import DetailsModal from './DetailsModal';

import { InsuranceService } from '../../Services/InsuranceService';
import './carpremium.scss';

 

const Calculator = () => {

  const [year, setYear] = useState('');

  const [vehicleValue, setVehicleValue] = useState('');

  const [modelType, setModelType] = useState('');

  const [premium, setPremium] = useState(null);

  const [isModalOpen, setModalOpen] = useState(false);

 

  const handleInputChange = (e, setValue) => {

    setValue(e.target.value);

  };

 

  const handleModelChange = (e) => {

    setModelType(e.target.value);

  };

 

  const calculatePremium = () => {

    // Simplified premium calculation formula (for demonstration)

    // Premium = (Age * 10) + (Vehicle Value / 100) + Mod Amount based on model

    const yearPremium = (5/(2023-year))*200;

    const vehicleValuePremium = vehicleValue / 50;

 

    let modAmount = 0;

    switch (modelType) {

      case 'Hatch Back':

        modAmount = 2000;

        break;

      case 'Sedan':

        modAmount = 2000 * 3;

        break;

      case 'SUV':

        modAmount = 2000 * 4;

        break;

      case 'MUV':

        modAmount = 2000 * 5;

        break;

      default:

        break;

    }

 

    const totalPremium = yearPremium + vehicleValuePremium + modAmount;
    InsuranceService.updateVehiclePremium(totalPremium);


    setPremium(totalPremium.toFixed(2));

    setModalOpen(true);

  };

 

  const handleSubmit = (e) => {

    e.preventDefault();

    calculatePremium();

    InsuranceService.updateVehicle(year);
    
  };

 

  const handleCloseModal = () => {

    setModalOpen(false);

  };

 

  return (

    <div className="calculator">

      <h2>Car Insurance Premium Calculator</h2>

      <form onSubmit={handleSubmit}>

        <div>

          <label htmlFor="year">Year of purchase:</label>

          <input

            type="number"

            id="year"

            value={year}

            onChange={(e) => handleInputChange(e, setYear)}

            min={2000}

            max={2023}

            required

          />

        </div>

        <div>

          <label htmlFor="vehicleValue">Vehicle Value (Rs.):</label>

          <input

            type="number"

            id="vehicleValue"

            value={vehicleValue}

            onChange={(e) => handleInputChange(e, setVehicleValue)}

            required

          />

        </div>

        <div>

          <label htmlFor="models">Select the Model:</label>

          <select id="models" onChange={handleModelChange} value={modelType} required>

            <option>Select Model Type</option>

            <option value="Hatch Back">Hatch Back</option>

            <option value="Sedan">Sedan</option>

            <option value="SUV">SUV</option>

            <option value="MUV">MUV</option>

          </select>

        </div>

        <button style={{backgroundColor:"white" , color:"hsl(256, 26%, 20%)"}} type="submit"><b>Calculate Premium</b></button>

      </form>

      {premium !== null && (

        <DetailsModal

          isOpen={isModalOpen}

          onClose={handleCloseModal}

          details={{year, vehicleValue, modelType}}

          premium={premium}

          isBikeCalculator={false}

          />

      )}

    </div>

  );

};

 

export default Calculator;