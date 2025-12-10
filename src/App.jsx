import "./App.css";
import Car from "./components/Car";
import Customer from "./Customer";
import Fruits from "./Fruits";

function App() {

  const customers =[
    {id: 1,name: "Jhon Cena", salary: "50000"},
    {id: 2,name: "Jack Wilson", salary: "60000"},
    {id: 3,name: "Alice Johnson", salary: "70000"},

  ]


  return (
    <>
    {customers.map((customer)=>{
      const {name,salary,id} = customer;
      return <Customer key={id} name={name} salary={salary}/>
    })}
      
    </>
  );
}

export default App;
