import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="d-flex justify-content-between py-5">
        <div className="">
          <Link to="/">Logo</Link>
        </div>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/About">About</NavLink>
          </li>
          <li>
            <NavLink to="/Service">Services</NavLink>
          </li>
          <li>
            <NavLink to="/Blog">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/Contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
