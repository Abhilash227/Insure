import React from 'react'

export default function DependentDetail(props) {
  return (
    <div>
                <br/>{props.dependent.DependentName}
                {/* <p>Name: {props.user.Model}</p> */}
                {/* <p>Model: {props.user.Type}</p> */}
                {/* <p>Age: {props.user.DependentAge}</p> */}
                {/* <p>{props.user.Relationship}</p> */}
                {/* <p>{props.user.Age}</p> */}
                {/* <button className='btn btn-danger'>Remove</button> */}
    </div>
  )
}
