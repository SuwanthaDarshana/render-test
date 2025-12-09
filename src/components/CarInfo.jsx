import React from 'react'

function CarInfo(props) {


  return (
    <div>
        <h2>Car Information</h2>
        <p>Brand: {props.carinfo.brand}</p>
        <p>Model: {props.carinfo.model}</p>
        <p>Year: {props.carinfo.year}</p>

        <h3>Available Colors</h3>
        <ul>
            {props.carcolor.map((color, index) => (
                <li key={index}>{color}</li>
            ))}
        </ul>
    </div>

  )
}

export default CarInfo