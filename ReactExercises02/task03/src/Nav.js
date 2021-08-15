import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <h3>Logo</h3>
      <ul className=" nav nav-link">
        <Link className="navStyle" to="/about">
          <li>O nama</li>
        </Link>
        <Link className="navStyle" to="/shop">
          <li>Prodavnica</li>
        </Link>
      </ul>
    </nav>
  );
}
export default Nav;
