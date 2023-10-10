import React from "react";
import InsuranceCard from "../../../components/vehicle-insurance/InsuranceCardComp";
import "./vehiclepage.scss";
import { images } from "../../../images";

const Vehicle = () => {
    return (
        <div>
            <div className="App">
                <h1 className="title">Vehicle Insurance</h1>
                <div className="insurance-container">
                    <InsuranceCard type="Car Insurance" description="Get a quote for your car insurance." linkTo="/car-quote" image={images.car}/>
                    <InsuranceCard type="Bike Insurance" description="Explore insurance options for your bike." linkTo="/bike-quote" image={images.bike} />
                </div>
                {/*<QuoteForm />*/}
            </div>
        </div>
    );
};

export default Vehicle;