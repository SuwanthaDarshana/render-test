import React from 'react'

function Fruits() {

    const fruits = ['Mango', 'Orange', 'Banana', 'Grapes'];

    const cars =[
        {id:1, brand:"Ford"},
        {id:2, brand:"BMW"},
        {id:3, brand:"Audi"}
    ]
   
  return (

    <div>
        <ul>
            {fruits.map(fruits=><li key={fruits}>{fruits}</li>)}
        </ul>
        <ol>
            {cars.map(cars=><li key={cars.id}>{cars.brand}</li>)}
        </ol>
    </div>
  )
}

export default Fruits