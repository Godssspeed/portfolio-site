import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

export class Navbar extends Component {
  render() {
    console.log(window);
    return (
      <div className="navbar">
        <div
          className={
            window.location.pathname === "/"
              ? "logo logo-dashboard"
              : window.location.pathname === "/about"
              ? "logo logo-about"
              : null
          }
        >
          <NavLink to="/" className="link">
            <h1>WillYoungWeb.Dev</h1>
          </NavLink>
        </div>
        <div className="links">
          <ul>
            <NavLink to="/about" className="link">
              <li>About</li>
            </NavLink>
            <NavLink to="/projects" className="link">
              <li>Projects</li>
            </NavLink>
            <NavLink to="/contact" className="link">
              <li>Contact</li>
            </NavLink>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
