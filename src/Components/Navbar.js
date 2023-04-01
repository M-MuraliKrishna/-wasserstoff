import React from 'react'
import { Link } from "react-router-dom";
// import { IoLogoWordpress } from "react-icons/io";
const Navbar = () => {
  // navbar section 
  return (
    <div className="navbar">
      {/* logo and name  */}
      <div className="logo-name">
        <div className="outer">
        <img src="https://www.thewasserstoff.com/images/wstf-logo.svg" alt="Logo" />
        {/* <IoLogoWordpress size="25"/> */}
        </div>
        {/* title of organization  */}
        <p>WASSERSTOFF</p>
      </div>
      <div className="search-navlist">
        <div className="search-box">
          {/* search box  */}
          <input type="search" name="search" id="search" />
          <span>
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
        </div>
        {/* unordered list  */}
        <ul className="navlist">
          <li>
            <Link to="/">Statistics</Link>
          </li>
          <li>
            <Link to="/Overview">Overview</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/dashboard">Analytics</Link>
          </li>
        </ul>
      </div>
      {/* users profile  */}
      <div className="profile-option">
        <span>
          <i className="fa-solid fa-user"></i>
        </span>
        <span>
          <i className="fa-solid fa-list"></i>
        </span>
      </div>
    </div>
  );
}

export default Navbar
