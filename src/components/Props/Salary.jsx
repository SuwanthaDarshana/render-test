import React from "react";

function Salary(props) {

  const printData = () => {
    console.log(props.salary);
  }


  return (
    <div>
      <h3>{props.salary}</h3>
      <button onClick={printData}>print</button>
    </div>
  );
}

export default Salary;
