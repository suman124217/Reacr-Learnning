import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <nav>
      <h2>MyWebsite</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;