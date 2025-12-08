import React from 'react'


const fruits = ['Mango', 'Orange', 'Banana', 'Grapes'];
const cars = ['BMW', 'Audi', 'Mercedes', 'Volvo'];

function Fruits() {
  return (
    <div>
        <ul>
            {fruits.map(fruits=><li key={fruits}>{fruits}</li>)}
        </ul>
        <ol>
            {cars.map(cars=><li key={cars}>{cars}</li>)}
        </ol>
    </div>
  )
}

export default Fruits