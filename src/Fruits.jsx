import React from 'react'


const fruits = ['Mango', 'Orange', 'Banana', 'Grapes'];
const cars = ['BMW', 'Audi', 'Mercedes', 'Volvo'];


function Fruits() {

  const message = ()=>{
    alert("Hello from Fruits Component");
  }

  const x = 10;


  return (
    <div>
        <ul>
            {fruits.map(fruits=><li key={fruits}>{fruits}</li>)}
        </ul>
        <ol>
            {cars.map(cars=><li key={cars}>{cars}</li>)}
        </ol>
        <button onClick={message} disabled={true}>Click Me</button>
        <h1>{(x) < 20 ? "Banana" : "Apple" }</h1>
    </div>
  )
}

export default Fruits