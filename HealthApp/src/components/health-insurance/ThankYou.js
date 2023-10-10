import React, { useState, useEffect } from 'react'
import { InsuranceService } from '../../Services/InsuranceService';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './thankYou.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import DependentDetail from '../My Plans/DependentDetail';

function ThankYou() {
    const [state, setstate] = useState({
        users: []
    })
    const [pack, setPack] = useState("")
    const [premium, setPremium] = useState(0);
    const [gst, setGst] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [total, setTotal] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        async function getUserData() {
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
            const pre = await InsuranceService.getUserPremium();
            let amount = pre.data[0].HealthPremium;
            console.log(pre.data[0].HealthPremium);
            setPremium(amount);
            let gstAmount = amount * 0.18;
            setGst(amount * 0.18);

        }

        async function calculate() {

        }

        getPack();
        getUserData();
    }, []);


    const onSubmit = async (e) => {
        e.preventDefault();
    }
    let { users } = state;
    let { pres } = premium;
    let level = pack;
    return (
        <>
            <div className='Home' >
                <Link to="/">
                    <button style={{ backgroundColor: 'black' }} type="submit">Go To Home</button>
                </Link>
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='col-md-3 ' style={{ border: '2px solid black', margin: '10px', backgroundColor: ' hsl(256, 26%, 20%)', color: 'white' }}>
                        <h2 style={{ fontSize: '30px' }}>Premium Summary</h2>
                        <hr />
                        <h4>Basic Premium: {premium}</h4>
                        <h4>Tax (GST 18%): {gst}</h4>
                        <hr />
                        <p><b>Total Premium Payable : {premium + gst}</b></p>
                        <div>
                            <br />
                            <hr />
                            <h3>Tax deduction for section 80D:</h3>
                            <p>Please note that as per the Income Tax Act 1961, you will get Section 80D benefit only for Self, Spouse, Dependent Children & Parents (whether dependent or not).</p>
                        </div>
                    </div>
                    <div className='col-md-8' style={{ border: '2px solid black', padding: '20px', textAlign: 'center' }}>
                        <div>
                            <h1>The premium is {premium + gst}</h1>
                        </div>
                        <div>
                            {
                                users.map((e) =>
                                    <div style={{ height: '40px', margin: '15px', backgroundColor: '#2D2640', color: 'white', fontSize: '10px', textAlign: 'center', fontWeight: '800px' }}>
                                        <DependentDetail dependent={e} disabled='true' />
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ThankYou
