import React from 'react'

function Fruits() {

    const fruits = ['Mango', 'Orange', 'Banana', 'Grapes'];

    const cars =[
        {id:1, brand:"Ford"},
        {id:2, brand:"BMW"},
        {id:3, brand:"Audi"}
    ]

    const colors =['Red', 'Green', 'Blue', 'Yellow'];
   
  return (

    <div>
        <ul>
            {fruits.map(fruits=><li key={fruits}>{fruits}</li>)}
        </ul>
        <ol>
            {cars.map(cars=><li key={cars.id}>{cars.brand}</li>)}
        </ol>
        <ul>
            {colors.map((color, index)=><li key={index}>{color}</li>)}
        </ul>
    </div>
  )
}

export default Fruits