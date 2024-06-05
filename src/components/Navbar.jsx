import React from 'react';
import { Link,NavLink } from 'react-router-dom';
import logo from "../Images/restauGalry/Restaurant-logo-design-free-template-1180x664-removebg-preview.png";
import "../App.css";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Restaurant Logo" className="logo" />
        </Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto"> 
            <li className="nav-item">
              <NavLink className="nav-link" to="/">HOME</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/restaurant">RESTAURANT</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/dining">DINING</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/delivery">DELIVERY</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
