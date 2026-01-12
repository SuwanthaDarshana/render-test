import React, { useRef } from "react";

const UseRefComponent = () => {
  const inputRef = useRef(null);  // Creating a ref using useRef hook 

  const focusInput = () => {
    inputRef.current.focus();  // accessing the current property to focus the input element
  };

  return (
    <div>
      <h3 style={{ color: "red" }}>4. UseRef Hook</h3>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export default UseRefComponent;
