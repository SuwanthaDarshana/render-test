import "./App.css";
import Goal from "./components/ConditionalRendering/Goal";
import SearchForm from "./components/ReactEvents/SearchForm";
import Customer from "./components/Props/Customer";
import Fruits from "./components/List/Fruits";
import MyForm from "./components/Forms/MyForm";
import MultipleInput from "./components/Forms/MultipleInput";
import CheckBox from "./components/Forms/CheckBox";
import RadioButton from "./components/Forms/RadioButton";
import DropDown from "./components/Forms/DropDown";
import SubmitForm from "./components/Forms/SubmitForm";
import TextArea from "./components/Forms/TextArea";
import SuspenseLazy from "./components/Suspense/SuspenseLazy";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./components/RouterPages/Home";
import About from "./components/RouterPages/About";
import Contact from "./components/RouterPages/Contact";
import ContactName from "./components/RouterPages/ContactName";
import ContactNumbers from "./components/RouterPages/ContactNumbers";
import Color from "./components/Hooks/UseState/Color";
import Timer from "./components/Hooks/UseEffect/Timer";
import PropDrilling from "./components/Hooks/UseContext/PropDrilling";
import Component from "./components/Hooks/UseContext/Component";
import UseRefComponent from "./components/Hooks/UseRef/UseRefComponent";
import UseReducerHook from "./components/Hooks/UseReducer/UseReducerHook";
import UseMemoHook from "./components/Hooks/UseMemo/UseMemoHook";
import NotUseCallBackHook from "./components/Hooks/UseCallBack/NotUseCallBackHook";
import UseCallbackHook from "./components/Hooks/UseCallBack/UseCallbackHook";
import CustomHook from "./components/Hooks/CustomHook/CustomHook";
import Example1 from "./components/Hooks/UseReducer/Example1";
import Parent from "./components/Hooks/UseCallBack/Example/Parent";
import { ThemeProvider } from "./components/Hooks/UseContext/UseContextExample/ThemeContext";
import ThemedButton from "./components/Hooks/UseContext/UseContextExample/ThemedButton";
import UseInteractionExample from "./components/Hooks/UseInteraction/UseInteractionExample";

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
      <Goal isGoal={true} />
      <Fruits />
      <MyForm />
      <MultipleInput />
      <CheckBox />
      <RadioButton />
      <DropDown />
      <SubmitForm />
      <TextArea />
      <SuspenseLazy />
      <BrowserRouter>
        {/** React Router code will go here in future */}
        <h3>-------Adding Rooutes--------</h3>
        <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
          <Link to="/contact">Contact</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />}>
            <Route path="name" element={<ContactName />} />
            <Route path="number" element={<ContactNumbers />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Color />
      <Timer />
      <Component /> {/* UseContext Hook */}
      <ThemeProvider>
        <div>
          <h3 style={{color:"green"}}>React Context API Theme Example</h3>
          <ThemedButton />
        </div>
      </ThemeProvider>
      <UseRefComponent />
      <UseReducerHook />
      <Example1 />
      <UseMemoHook />
      {/* <NotUseCallBackHook/> */}
      <UseCallbackHook />
      <Parent />
      <UseInteractionExample/>
      <CustomHook />
    </div>
  );
}

export default App;
