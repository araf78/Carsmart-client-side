import React from "react";
import "./Login.css";
import { ImGoogle } from "react-icons/im";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-container w-75 mx-auto p-3 rounded-2">
      <h2 className="text-white pt-3 fs-1">Login</h2>
      <form>
        <input
          className=" w-50 mt-3 mb-3 py-1 px-3 fs-3 rounded"
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />
        <br />
        <input
          className="w-50 mt-3 mb-3 py-1 px-3 fs-3 rounded"
          type="password"
          name="password"
          placeholder="Password"
          required
        />
      </form>
      <div className="d-flex flex-column w-50 mx-auto mt-3 mb-3">
          {/* login button  */}
        <button
          className="  py-1 px-3 fs-4 rounded"
          type="button"
          class="btn btn-light"
        >
          Login
        </button>

        <p className="text-white mt-3">You have not an account? or <Link className="text-white" to="/signup"><small>create account</small></Link></p>

        <h4 className="text-white mt-5 fs-5">or log With</h4>
        {/* google login  */}
        <button
          className=" mt-3 py-1 px-3 align-items-center fs-3 rounded"
          type="button"
          class="btn btn-light"
        >
          <ImGoogle /> Google
        </button>
      </div>
    </div>
  );
};

export default Login;
