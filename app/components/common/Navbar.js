import React from "react";
import { Link } from "react-router";
const Navbar = () => (
  <nav style={{ marginBottom: 0 }} className="navbar navbar-inverse">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link className="navbar-brand" to="/">NYT React App</Link>
      </div>
      <ul className="nav navbar-nav">
        <li className={location.pathname === "/" && "active"}>
          <Link to="/">Home</Link>
        </li>

      </ul>
    </div>
  </nav>
);
export default Navbar;