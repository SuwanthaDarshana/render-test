import React, { useEffect, useRef, useState } from "react";

const UseRefStoreValue = () => {
  const [text, setText] = useState("");
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current += 1;
  });

  return (
    <div>
      <h3 style={{ color: "green" }}>useRef to Store Value Across Renders</h3>
      <input onChange={(e) => setText(e.target.value)} />
      <p>Rendered: {renderCount.current} times</p>
    </div>
  );
};

export default UseRefStoreValue;
