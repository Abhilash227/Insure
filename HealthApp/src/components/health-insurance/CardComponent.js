import React from "react";
import AddDependent from "./AddDependent";
import { Link } from 'react-router-dom';
//import { Modal } from "./Modal";
const Card = ( { title , description, level, linkTo, color }) => {
    return (
        <>
        <Link underline='none' to={linkTo} className="card package-card" style={{backgroundColor: color}}>
        <div>
            <h2>{title}</h2>
        </div>
        <p>{description}</p>
        </Link>
        </>
    );
};

export default Card;