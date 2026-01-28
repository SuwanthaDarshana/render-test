import React from 'react'

function Fruits() {

    const fruits = ['Mango', 'Orange', 'Banana', 'Grapes'];

    const cars =[
        {id:1, brand:"Ford"},
        {id:2, brand:"BMW"},
        {id:3, brand:"Audi"}
    ]

    const colors =['Red', 'Green', 'Blue', 'Yellow'];

    const flowers = ['Rose', 'Lily', 'Jasmine', 'Tulip'];

    const colorsFlowers = [...colors, ...flowers];

    const shoot = (a) => {
        alert(a);
    }

    const isLoggedIn = true;
    const isAdmin = true;

    const checkLoggind = (isLoggedIn) => {        
        if(isLoggedIn){
            return <h4>Welcome User!</h4>
        } else {
            return <h4>Please Login</h4>
        }   
    }
   
  return (

    <div>
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
        <ol>
            {flowers.map((flower, index)=><li key={index}>{flower}</li>)}
        </ol>
        <ul>
        <h3>Colors and Flowers (spread operator)</h3>
            {colorsFlowers.map((item, index)=><li key={index}>{item}</li>)}
        </ul>
    </div>
    <div>
        <h3>Passing argument</h3>
        <button onClick={() => shoot('Button clicked!')}>Click Me</button>
    </div>
    <div>
        <h3 style={{color:"red"}}>Conditional Rendering (if-else)</h3>
        {checkLoggind(isLoggedIn)}
    </div>
    <div>
        <h3 style={{color:"blue"}}>Conditional Rendering (ternary operator)</h3>
        {isLoggedIn ? <h4>Welcome User!</h4> : <h4>Please Login</h4>}
    </div>
    <div>
        <h3 style={{color:"green"}}>Conditional Rendering (&& operator)</h3>
        {isLoggedIn && <h4>Welcome User!</h4>}
    </div>
    <div>
        <h3 style={{color:"purple"}}>Short Circuit</h3>
        {isLoggedIn && isAdmin && <h4>Welcome Admin! "Can load component"</h4>}
    </div>
    </div>
  )
}

export default Fruits