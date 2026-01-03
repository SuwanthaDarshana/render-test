import React, { useState } from "react";

function MyForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with Email:", email, "and Password:", password);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter Your Name:</label>
        <input type="text" id="name" name="name" />
        <br />
        <br />
        <label>Enter Your Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <label>Enter Your Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /> <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default MyForm;
