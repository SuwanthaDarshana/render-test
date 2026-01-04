import React, { useState } from "react";

function MultipleInput() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
    <h3>Multiple Input Form</h3>
      <form>
        <label>Enter Your Username:</label>
        <input
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <br />
        <label>Enter Your Email:</label>
        <input name="email" value={formData.email} onChange={handleChange} />
      </form>
    </div>
  );
}

export default MultipleInput;
