import React, { useCallback, useState } from "react";

const Button = ({ onClick }) => {                           // child component
  console.log("Button rendered");
  return <button onClick={onClick}>Click Me</button>;
};

const UseCallbackHook = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Clicked");
  }, []);

  return (
    <div>
      <h3 style={{ color: "red" }}>7.useCallback Hook</h3>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <Button onClick={handleClick} />                                 {/* passing function as prop to child component */}
    </div>
  );
};

export default UseCallbackHook;
