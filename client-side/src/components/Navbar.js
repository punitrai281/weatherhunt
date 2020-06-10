import React from "react";
function Navbar() {
  return (
    <div className="navbar">
      <div className="brand">
        <a href="/">
          <img src="/images/brand-logo.png" alt="logo" />
        </a>
      </div>
      <div className="nav-items">
        <ul>
          <li className="nav-item">
            <a href="/">Home</a>
          </li>
          <li className="nav-item">
            <a href="about">About</a>
          </li>
          <li className="nav-item">
            <a href="newsletter">Newsletter</a>
          </li>
          <li className="nav-item">
            <a href="contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Navbar;
