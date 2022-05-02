import React, { useState } from "react";
import "./Login.css";
import { ImGoogle } from "react-icons/im";
import { Link } from "react-router-dom";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { getAuth } from "@firebase/auth";
import app from "../../firebase.init";
import { async } from "@firebase/util";

const auth = getAuth(app);

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // sign in with email password 
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  // google sign 
  const [signInWithGoogle] = useSignInWithGoogle(auth)

  // send reset password 
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
  
  return (
    <div className="login-container w-75 mx-auto p-3 rounded-2">
      <h2 className="text-white pt-3 fs-1">Login</h2>
      <form>
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          className=" w-50 mt-3 mb-3 py-1 px-3 fs-3 rounded"
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />
        <br />
        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
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
          onClick={()=>signInWithEmailAndPassword()}
          className="  py-1 px-3 fs-4 rounded"
          type="button"
          class="btn btn-light"
        >
          Login
        </button>

        <p className="text-white mt-3">You have not an account? or <Link className="text-white" to="/signup"><small>create account</small></Link>
        <button onClick={async ()=>{
          await sendPasswordResetEmail(email);
          alert('send email')
        }} className="text-black rounded p-1 ms-2 border-0">Forget password?</button>
        </p>

        <h4 className="text-white mt-5 fs-5">or log With</h4>
        {/* google login  */}
        <button
          onClick={()=> signInWithGoogle()}
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
