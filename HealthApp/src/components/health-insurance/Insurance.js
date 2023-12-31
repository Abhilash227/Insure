import React from 'react'
import { InsuranceService } from '../../Services/InsuranceService';
import { Link } from "react-router-dom";
import './insurance.scss'



export default function Insurance(props) {

    function onDelete() {
        InsuranceService.deleteUser(props.user.DependentId);
        alert("Dependent is deleted");
    }

    return (
        <>
            <div className='card health-card'>
                <p>Name: {props.user.DependentName}</p>
                <p>Relationship: {props.user.Relationship}</p>
                <p>Age: {props.user.DependentAge}</p>
                <div className='click'>
                <button onClick={onDelete} className='remove'>Remove</button>
                </div>
            </div>
        </>
    )
}

