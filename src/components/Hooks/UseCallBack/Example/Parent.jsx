import React, { useCallback, useState } from 'react';
import Button from './Button';

const Parent = () => {

    const [number, setNumber] = useState(0);

    const numberIncrement = useCallback(() => {
        console.log("Parent component rendered");
        setNumber(prevNumber => prevNumber + 1);
    }, []);

    return (
        <div>
            <h3 style={{ color: "green" }}>useCallback Hook Example</h3>
            <p>Number: {number}</p>
            <Button addOne={numberIncrement} />
            
        </div>
    );
}

export default Parent;
