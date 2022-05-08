import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "@firebase/auth";
import app from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";

const auth = getAuth(app);

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <nav className=' header d-flex justify-content-around m-4  align-items-center'>
      <h2 className="fs-1 fw-bold">
        Cars<span className="title">mart</span>
      </h2>
      <div className=''>
        <Link to="/">Home</Link>
        <Link to='/manageInventories'>Manage Inventory</Link>
        <Link to="/blogs">Blogs</Link>
        {
          user?.uid ? 
           <button className="btn btn-outline-dark fw-bolder" onClick={()=> signOut(auth)}>Sign out</button>
          :
          <Link to="/login">Login</Link>
        }
        <Link to="/*"></Link>
      </div>
    </nav>
  );
};

export default Header;
