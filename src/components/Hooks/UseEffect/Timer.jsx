import React, { useEffect, useState } from 'react';

const Timer = () => {

    const [count, setCount] = useState(0);

    const [number, setNumber] = useState(0); // Unused state variable

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setCount(count + 1);
        },1000);

        return () => clearTimeout(timer); // Cleanup the timer on unmount or before next effect

    },[count]);  {/* This effect runs every time the count changes */}


    useEffect(()=>{
        console.log("Number state has changed:", number);

    },[number]);

    return (
        <div>
            <h3 style={{color:'red'}}>2. useEffect Hook</h3>
            <h4>Timer Count: {count}</h4>
            <hr />
            <h4>Number: {number}</h4>
            <button onClick={()=> setNumber(number + 1)}>Increment Number</button>

        </div>
    );
}

export default Timer;
