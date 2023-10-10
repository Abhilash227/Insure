import React from "react";
import Card from "../../../components/health-insurance/CardComponent";
import ThankYou from "../../../components/health-insurance/ThankYou";
import { InsuranceService } from "../../../Services/InsuranceService";
import { images } from "../../../images";

const Health = () => {
        let level = 'base';
        function onSubGold(ev) {
                level = 'gold';
                // alert(level);
                InsuranceService.updatePackage(level);
        }
        function onSubPlat(ev) {
                level = 'platinum';
                // alert(level);
                InsuranceService.updatePackage(level);
        }
        function onSubBase(ev) {
                level = 'base';
                // alert(level);
                InsuranceService.updatePackage(level);
        }

        return (
                <div>
                        <h1 className="title">Packages</h1>
                        <div className="package-container">
                                {/* each card has type, description and link to navigate to */}
                                <button style={{ backgroundColor: 'white' }} onClick={onSubBase}>
                                        <Card title="Base"
                                                description="Basic Membership with Limited Benefits"
                                                level="Base" linkTo="/thank-you" color="#c0c0c0" />
                                </button>

                                <button style={{ backgroundColor: 'white' }} onClick={onSubGold}>
                                        <Card title="Gold" description="Enhanced Membership with more Benefits" level="Gold" linkTo="/thank-you" color="#ffd700" />
                                </button>
                                <button style={{ backgroundColor: 'white' }} onClick={onSubPlat}>
                                        <Card title="Platinum"

                                                description="Premium Membership with exclusive Benefits"
                                                level="Platinum" linkTo="/thank-you" color="#e5e4e2" />
                                </button>
                        </div>
                </div>
        );
};

export default Health;