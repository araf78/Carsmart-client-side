import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className='header d-flex justify-content-around  align-items-center'>
      <h2 className="fs-1 fw-bold">
        Cars<span className="smart">mart</span>
      </h2>
      <div className='fs-4'>
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Header;
