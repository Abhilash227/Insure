import React, { useState, useEffect } from "react";
import "./newhealth.scss";
import { InsuranceService } from "../../Services/InsuranceService";

const NewHealth = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [plan, setPlan] = useState("");
    const [discount, setDiscount] = useState(0);
    const [Upremium, setUPremium] = useState(0);
    const [Onepremium, setOnePremium] = useState(0);
    const [Twopremium, setTwoPremium] = useState(0);
    const [Threepremium, setThreePremium] = useState(0);
    const [state, setstate] = useState({
        users: []
    })
    const [pack, setPack] = useState("")
    const [premium, setPremium] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        async function getData() {
            const res = await InsuranceService.getUserPremium();
            let pre = res.data[0].HealthPremium;
            setUPremium(pre);
            setOnePremium(pre - pre * 0.05);
            setTwoPremium((pre - pre * 0.075) * 2);
            setThreePremium((pre - pre * 0.1) * 3);

        } async function getUserData() {
            const res = await InsuranceService.getUserId(3);
            if (res.data.length > 0) {
                setCount(1);
                setstate({
                    ...state, users: res.data
                })
            }
        }
        async function getPack() {
            const res = await InsuranceService.getPackageLevel();
            setPack(res.data[0].PackageLevel);
        }
        getData();
        getPack();
        getUserData();
    }, []);


    const plans = [
        {
            name: "3 Years Plan",
            discount: 10,
            premium: Threepremium,
        },
        {
            name: "2 Years Plan",
            discount: 7.5,
            premium: Twopremium,
        },
        {
            name: "1 Year Plan",
            discount: 5,
            premium: Onepremium,
        },
    ];

    const handleButtonClick = () => {
        setShowPopup(true);
    };

    function onSubmit() {
        console.log(Upremium);
    }

    const handlePlanSelect = (plan) => {
        let totalAmount = 0;
        let discAmount = 0;
        setPlan(plan.name);
        setDiscount(plan.discount);
        setPremium(plan.premium);
    };

    return (
        <div className="new-health">
            <button onClick={handleButtonClick}>Click here</button>

            {showPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <h3 style={{ textAlign: "center" }}>Would you like to increase your policy duration?</h3>
                        <span className="close-btn" onClick={() => setShowPopup(false)}>&times;</span>
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {plans.map((plan) => (
                                    <tr key={plan.name}>
                                        <td>
                                            <input
                                                type="radio"
                                                name="plan"
                                                value={plan.premium}
                                                onChange={() => handlePlanSelect(plan)}
                                            />
                                            {/* <label htmlFor={plan.name}>{plan.name}</label> */}
                                        </td>
                                        <td>{plan.name}</td>
                                        <br />
                                        <td>{plan.discount}% Off</td>
                                        <br />
                                        <td>Rs {plan.premium}</td>
                                        <br />
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <button onClick={onSubmit}>Proceed</button>

                    </div>
                </div>
            )}
        </div>
    );
};

export default NewHealth;
