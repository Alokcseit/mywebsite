import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <div>
      <div className="head">
        <div className="logoimage">
          <img className="logo" src="./logo.jpg.jpeg" alt="" />
          <div className="name"> ALOK KUMAR SWAIN</div>
        </div>
        <div className="logoimage2">
          <NavLink to="/" className="links1">
            HOME
          </NavLink>
          <NavLink to="project" className="links2">
            PROJECTS
          </NavLink>
          <NavLink to="contacct" className="links3">
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Header;
