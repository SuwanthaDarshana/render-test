import React, { useState } from 'react';

const Color = () => {

    const[color,setColor] = useState('red');

    const changeColor = ()=>{
        setColor('blue');
    }

    const resetColor = ()=>{
        setColor('red');
    }


    const [count,setCount] = useState(0);

    const [car,setCar] = useState({
        brand:'Ford',
        model:'Mustang',
        year:1964
    });

    const [phone, setPhone] = useState({
        brand: 'Apple',
        model: 'iPhone 13',
        year: 2021
    });


    return (
        <div>
            <h3 style={{color:'red'}}>1. UseState Hook</h3>
            <h4>My favorite color is {color}</h4>
            <button onClick={changeColor}>Change to Blue</button>
            <button onClick={()=>setColor('green')}>Change to Green</button>
            <button onClick={resetColor}>Reset Color</button>
            <hr />
            <h4>Car Brand: {car.brand} | Model: {car.model} | Year: {car.year}</h4>
            <button onClick={()=>setCar({...car,model:'Fiesta'})}>Change Model to Fiesta</button>    {/* Using spread operator to retain other properties */}
            <hr />
            <h4>Phone brand: {phone.brand} | Model: {phone.model} | Year: {phone.year}</h4>
            <button onClick={()=>setPhone({...phone,brand:"Samsung"})}>Change Brand to Samsung</button>
            <hr />
            <h4>Count:{count}</h4>
            <button onClick={()=>setCount(count+1)}>Increase Count</button>
            <button onClick={()=>setCount(count-1)}>Decrease Count</button>
            <hr />
        </div>
    );
}

export default Color;
