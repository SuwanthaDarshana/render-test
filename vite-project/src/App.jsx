import "./App.css";
import Customer from "./Customer";

function App() {

  const user1 ={name: "Jhon Cena", salary: "50000"};
  return (
    <>
      <Customer name={user1.name} salary={user1.salary} />
      <Customer name="Jack Wilson" salary="60000"/>
      <Customer name="Alice Johnson " salary="70000"/>
    </>
  );
}

export default App;
