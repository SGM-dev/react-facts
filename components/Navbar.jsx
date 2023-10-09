import React from "react";
import logo from "../images/reactjs-icon.svg";

export default function Navbar(props) {
  return (
    <nav className={`navbar ${props.darkMode ? "dark" : ""}`}>
      <img src={logo} className="nav--icon" />
      <h3 className="nav--logo_text">ReactFacts</h3>
      <div className='toggle-switch'>
        <label>
          <input type='checkbox' onClick={props.toggleDarkMode}></input>
          <span class='slider'></span>
        </label>
      </div>
    </nav>
  );
}

