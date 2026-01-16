import React, { useState, useTransition } from "react";

const UseInteractionExample = () => {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const [isPending, startTransition] = useTransition();   

  const handleChange = (e) => {
    setText(e.target.value); // URGENT update

    startTransition(() => {
      // NON-URGENT update
      const items = Array(10000).fill(e.target.value);
      setList(items);
    });
  };

  return (
    <div>
      <h3 style={{ color: "red" }}>8. UseTransition Hook</h3>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Type here..."
      />

      {isPending && <p>Loading...</p>}

      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseInteractionExample;
