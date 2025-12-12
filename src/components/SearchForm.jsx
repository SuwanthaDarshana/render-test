import React from "react";

function SearchForm() {
  const manageChangeEvent = () => {
    console.log("Change Event Managed");
  }

  const manageClickEvent = () => {
    console.log("Click Event Managed");
  }

  return (
    <div className="search-outer">
      <form action="">
        <input type="search" onChange={manageChangeEvent} /> &nbsp;
        <button type="button" onClick={manageClickEvent}>Search</button>
      </form>
    </div>
  );
}

export default SearchForm;
