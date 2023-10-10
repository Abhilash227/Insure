import React from 'react';
import PlanSection from './PlanSection';
// Import the main stylesheet
import './plan.css'
const AllPack = () => {
  return (
    <div className="alldivs">
      <h1>Choose Your Health Insurance Plan</h1>
      <hr></hr>
      <PlanSection
        name="Base Plan"
        price="$50/month"
        description="Essential coverage for basic health needs."
        cardCount={1}
        cardData={[
          { coverage: 'Hospitalization Expenses', details: 'Up to Rs.50,00,000 coverage per year. Includes room charges, ICU, and surgery costs.' }
        ]}
      />
      <hr />
      <PlanSection
        name="Gold Plan"
        price="$100/month"
        description="Comprehensive coverage with additional benefits."
        cardCount={2}
        cardData={[
          { coverage: 'Maternity Care', details: 'Coverage for pregnancy and childbirth, including prenatal and postnatal care.' },
          { coverage: 'Prescription Drugs', details: 'Medication coverage with low copays for generic and brand-name drugs.' }
        ]}
      />
      <hr />
      <PlanSection
        name="Platinum Plan"
        price="$150/month"
        description="Premium coverage with maximum benefits."
        cardCount={3}
        cardData={[
          { coverage: 'Emergency Evacuation', details: 'Assistance for emergency medical evacuations, including transportations to a suitable medical facility' },
          { coverage: 'Global Health Coverage', details: 'Health coverage even when traveling abroad, covering medical emergencies and routine care.' },
          { coverage: 'Specialized Treatments', details: 'Coverage for specialized medical treatments, such as cancer therapies and organ transplants' }
        ]}
      />
      <hr />

    </div>
  );
};
export default AllPack;