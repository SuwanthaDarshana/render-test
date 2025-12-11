import "./App.css";
import Car from "./components/Car";
import SearchForm from "./components/SearchForm";
import Customer from "./Customer";
import Fruits from "./Fruits";

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
    </div>
  );
}

export default App;
