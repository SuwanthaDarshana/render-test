import React from "react";

function SearchForm() {

  const [clearInput, setClearInput] = React.useState("");


  const manageChangeEvent = (e) => {
    console.log(e.target.value);
  }

  const manageClickEvent = (e) => {
    e.preve
    console.log("Click Event Managed");

  }

  const mangeSubmitEvent =(e)=>{
    console.log("Form Submitted");
  }

  const manageResetEvent =(e)=>{
    console.log("Form Reset");
    setClearInput("");

  }

  return (
    <div className="search-outer">
      <form onSubmit={mangeSubmitEvent}>
        <input type="search" onChange={manageChangeEvent} /> &nbsp;
        <button type="submit" onClick={manageClickEvent}>Search</button>
        <button type="reset" onClick={manageResetEvent}>Reset</button>
      </form>
    </div>
  );
}

export default SearchForm;
