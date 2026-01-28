import React, { useRef, useState } from "react";

function MyForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();            // prevent page reload on form submission
    console.log("Form submitted with Email:", email, "and Password:", password);
  };

  return (
    <div>
      <div>
    <h3>Controlled Form</h3>
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
        <br />
        <label>Enter Your Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <p>Current Email: {email}</p>
        <br /> <br />
        <button type="submit">Login</button>
      </form>
    </div>
    <div>
      <h3>Uncontrolled Form</h3>
      <form onSubmit={handleSubmit}>
        <label>Enter Your Email:</label>
        <input type="email" ref={emailRef} />
      </form>
    </div>
    </div>
  );
}

export default MyForm;
