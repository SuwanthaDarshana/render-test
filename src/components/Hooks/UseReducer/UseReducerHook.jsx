import React, { useReducer } from "react";
import Color from "../UseState/Color";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };

    case "decrement":
      return { count: state.count - 1 };

    default:
      return state;
  }
};

const UseReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <h3 style={{ color: "red" }}>5.useReducer Hook</h3>
      <h4>Count: {state.count}</h4>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  );
};

export default UseReducerHook;
