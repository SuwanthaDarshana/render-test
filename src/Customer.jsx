import React from "react";
import "./App.css";
import Name from "./Name";
import Salary from "./Salary";

function Customer(props) {
    // console.log(props);
    const { name, salary } = props;
  return (
    <div className="user-outer">
      <Name name={name} />
      <Salary salary={salary} />
    </div>
  );
}

export default Customer;
