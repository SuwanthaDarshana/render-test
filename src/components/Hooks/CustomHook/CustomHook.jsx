import useCounter from "./useCounter";

const CustomHook = () => {

    const { count, increment } = useCounter();

    return (
        <div>
            <h3 style={{ color: "red" }}>8.Custom Hook</h3>
            <h3>Count: {count}</h3>
            <button onClick={increment}>Increment</button>
        </div>
    );
}

export default CustomHook;
