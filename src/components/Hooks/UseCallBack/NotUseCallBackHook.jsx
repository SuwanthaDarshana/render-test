import React, { useState } from "react";


const Button = ({ onClick }) => {
  console.log("Button rendered");
  return <button onClick={onClick}>Click Me</button>;
};

const NotUseCallBackHook = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log("Clicked");
  };

  return (
    <div>
      <h3>Not UseCall Back</h3>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <Button onClick={handleClick} />
    </div>
  );
};

export default NotUseCallBackHook;
