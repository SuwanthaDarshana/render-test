import React from 'react'
import CarInfo from './CarInfo'

function Car() {

    const carDetails = {
        brand: "Toyota",
        model: "Corolla",
        year: 2020
    };

    const carColor =['Red', 'Blue', 'Green', 'Black'];

  return (
    <div>
        <CarInfo carinfo={carDetails} carcolor={carColor} />
        
    </div>
  )
}

export default Car