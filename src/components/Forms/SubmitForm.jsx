import React, { useState } from "react";

function SubmitForm() {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    alert(name);
  };

  return (
    <div>
      <h3>SubmitForm</h3>
      <form onSubmit={handleSubmit}>
        <label>Enter Your Name</label>
        <input type="text" value={name} onChange={handleChange} />
        <input type="submit"/>
      </form>
    </div>
  );
}

export default SubmitForm;
