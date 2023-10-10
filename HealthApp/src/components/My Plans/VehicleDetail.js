import React from 'react'

export default function VehicleDetail(props) {
  return (
    <div className='.col-md-8 m-2 bg-light'>
    <div className='container'>
        <div className='row'>
            <div className='col-md-4'>
                <p>Id: {props.user.RegistrationNumber}</p>
                <p>Name: {props.user.Model}</p>
                <p>Model: {props.user.Type}</p>
                <button className='btn btn-danger'>Remove</button>
            </div>
        </div>
    </div>
</div>
  )
}
