import React, { useState } from "react";

function RadioButton() {
  const [gender, setGender] = useState("male");

  const handleSubmit = (e)=>{
    e.preventDefault();
    alert(`your gender is :${gender}`);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>RadioButton</h3>
      <p>Select Your Gender</p>
      <label>Male</label>
      <input
        type="radio"
        name="gender"
        value="male"
        checked={gender === "male"}
        onChange={(e) => setGender(e.target.value)}
      />
      <label>Female</label>
      <input
        type="radio"
        name="gender"
        value="female"
        checked={gender === "female"}
        onChange={(e) => setGender(e.target.value)}
      />
      <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RadioButton;
