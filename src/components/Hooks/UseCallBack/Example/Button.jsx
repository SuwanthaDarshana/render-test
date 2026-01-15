import React, { memo } from 'react';

const Button = memo(({ addOne }) => {
    console.log("child component rendered");
    return (
        <div>
            <button onClick={addOne}>Increment Number</button>
        </div>
    );
});

export default Button;
