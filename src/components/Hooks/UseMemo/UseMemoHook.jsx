import React, { useMemo, useState } from "react";

const UseMemoHook = () => {

  console.log("UseMemoHook component rendered");

  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const doubleCount = useMemo(() => {
    console.log("Calculating double count...");
    for (let i = 0; i < 100000000; i++) {}
    return count * 2;
  },[count]);  // Recompute only when 'count' changes

  return (
    <div>
      <h3 style={{ color: "red" }}>6.useMemo Hook</h3>
      <p>Double Count: {doubleCount}</p>
        <button onClick={() => setCount(count + 1)}>Increment Count</button>
        <input
          type="text"
          value={text}
          placeholder="Type something..."
          onChange={(e) => setText(e.target.value)}
        />
    </div>
  );
};

export default UseMemoHook;
