import "./App.css";
import Goal from "./components/ConditionalRendering/Goal";
import SearchForm from "./components/ReactEvents/SearchForm";
import Customer from "./components/Props/Customer";
import Fruits from "./components/List/Fruits";
import MyForm from "./components/Forms/MyForm";
import MultipleInput from "./components/Forms/MultipleInput";
import CheckBox from "./components/Forms/CheckBox";

function App() {
  const customers = [
    { id: 1, name: "Jhon Cena", salary: "50000" },
    { id: 2, name: "Jack Wilson", salary: "60000" },
    { id: 3, name: "Alice Johnson", salary: "70000" },
  ];

  return (
    <div>
      <SearchForm />
      {customers.map((customer) => {
        return <Customer {...customer} key={customer.id} />;
      })}
      <Goal isGoal={true}/>
      <Fruits/>
      <MyForm/>
      <MultipleInput/>
      <CheckBox/>
    </div>
  );
}

export default App;
