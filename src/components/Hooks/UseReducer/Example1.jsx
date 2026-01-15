import React, { useReducer } from "react";

const reduce = (state, action) =>{
    if(action.type === "increment"){
        return{count: state.count + 1}
    }else{
        return{count: state.count - 1}
    }
}

const Example1 = () => {
//   const [count, setCount] = useState(0);

const [state, dispatch] = useReducer(reduce, {count:0});

  return (
    <div>
      <h3 style={{ color: "green" }}>Example Use Reducer Hook</h3>
      <h4>Count: {state.count}</h4>
      <button onClick={() => dispatch({type:"increment"})}>Increment</button>
      <button onClick={() => dispatch({type:"decrement"})}>Decrement</button>
    </div>
  );
};

export default Example1;
