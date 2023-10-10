import React, { useState, useEffect } from 'react'
import { InsuranceService } from '../../Services/InsuranceService';
import { useNavigate } from 'react-router-dom';
import "./adddependent.scss";
import { Link } from 'react-router-dom';
import "./DependentList";
export default function AddDependent() {
    const [state, setState] = useState({
        dependent: {
            "DependentName": "",
            "DependentAge": 0,
            "UserId": 0,
            "Relationship": ""
        }
    });


    let { dependent } = state;
    let navigate = useNavigate();

    function updateInput(ev) {
        debugger;
        setState({
            ...state, dependent: {
                ...state.dependent, [ev.target.name]: ev.target.value
            }
        })
    }


    const [userState, setUser] = useState({
        users: []
    })

    useEffect(() => {
        async function getData() {
            const res = await InsuranceService.getAllUsers();
            setUser({
                ...userState, users: res.data
            })
        }
        getData();
    }, []);
    let { users } = userState;

    async function onSubmit(ev) {

        // alert("Hello")
        users.map((e) => {
            if (e.Flag == 3) {
                dependent.UserId = e.UserId;
            }
        })
        // alert("Hello");
        ev.preventDefault();
        const res=await InsuranceService.getDependentsCount();
        // alert(res.data[0].Column0);
        // console.log(res.data);
        if(res.data[0].Column0<4)
        {
            InsuranceService.addDependent(dependent).then((res) => {
                alert("Dependent added successfully");
                navigate('/');
            })
        }
        else{
            alert("Only 4 dependents can be added");
        }
    }

    return (
        <>
            <div className='add-dependent'>
                {/* <h1>{userData}</h1>
             <pre>{JSON.stringify(dependent)}</pre> */}
                <h1 className="title">Add new Dependent</h1>
                <br/>
                
                <form onSubmit={onSubmit}>
                <div className="input-container">
                    <label>
                        Enter the Name:
                        <input onChange={updateInput} type='text' name="DependentName" value={dependent.DependentName} required/>
                    </label>
                    </div>
                    <br/>
                    <div className="input-container">
                    <label>
                        Enter the Age:
                        <input onChange={updateInput} type='number' name='DependentAge' value={dependent.DependentAge} className='form-control' required />
                    </label>
                    </div>
                    <br/>
                    {/* <p>
                            Enter the User:
                            <input  onChange={updateInput} type='number' name='UserId' value={dependent.UserId} className='form-control'/>
                        </p>  */}
                    <div className="input-container">
                    <label>
                        {/* Select the Relationship:
                        <select onChange={updateInput} name='Relationship' className='form-control' value={dependent.Relationship} required>
                            <option>Select the dependent</option>
                            <option value="Father">Father</option>
                            <option value="Mother">Mother</option>
                            <option value="FatherInLaw">Father In Law</option>
                            <option value="MotherInLaw">Mother In Law</option>
                            <option value="Son">Son</option>
                            <option value="Daughter">Daughter</option>
                        </select> */}
                        Enter the Relationship:
                        <input onChange={updateInput} type='text' name='Relationship' value={dependent.Relationship} className='form-control' required />
                    </label>
                    </div>
                    <br/>
                    <div className="button-container">
                    <label>
                        <button className='btn btn-danger' >Save Changes</button>
                        <p>
                        <Link to="/dependent-list">
                            <button className='btn btn-secondary'>
                                Back
                            </button>
                        </Link>
                        </p>
                    </label>
                    </div>
                </form>
            </div>
        </>
    )
}
