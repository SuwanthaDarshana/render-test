
import { Link, Outlet } from "react-router-dom";
/*Nested Routes */
const Contact = () => {
  return (
    <div>
      <h3>Contact</h3>
      <nav>
        <Link to="/contact/name">Go to Names</Link> |{" "}
        <Link to="/contact/number">Go to Phone Numbers</Link>
      </nav>
      <Outlet />    {/* This is where nested route components will be rendered */}
    </div>
  );
};

export default Contact;
