import React from "react";
import { Link, Outlet } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <h3>Contact</h3>
      <nav>
        <Link to="/contact/name">Go to Names</Link> |{" "}
        <Link to="/contact/number">Go to Phone Numbers</Link>
      </nav>
        <Outlet />
    </div>
  );
};

export default Contact;
