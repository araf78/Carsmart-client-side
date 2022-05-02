import React, { useState } from 'react';
import "./SignUp.css";
import { ImGoogle } from "react-icons/im";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { getAuth } from '@firebase/auth';
import app from '../../firebase.init';
const auth = getAuth(app)

const SignUp = () => {
  // email password auth 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
    return (
        <div className="login-container w-75 mx-auto mt-3 p-3 rounded-2">
      <h2 className="text-white pt-3 fs-1">Sign up</h2>
      <form>
        <input
          value  = {name}
          onChange={e => setName(e.target.value) }
          className=" w-50 mt-3 mb-3 py-1 px-3 fs-3 rounded"
          type="name"
          name="name"
          placeholder="Your Name"
        />
        <br />
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          className=" w-50 mt-3 mb-3 py-1 px-3 fs-3 rounded"
          type="email"
          name="email"
          placeholder="Your Email"
        />
        <br />
        <input
          value={password}
          onChange = {e => setPassword(e.target.value)}
          className="w-50 mt-3 py-1 px-3 fs-3 rounded"
          type="password"
          name="password"
          placeholder="Password"
        />
      </form>
      <div className="d-flex flex-column w-25  mt-4 mx-auto mb-3">
        <button 
          onClick = {()=> createUserWithEmailAndPassword(email, password)}
          className=" mt-3 mb-3 py-2 px-3 fs-3 rounded"
          type="button"
          class="btn btn-light"
        >
          Sign up
        </button>
        <h4 className="text-white mt-5 fs-5">or Sign up</h4>
        <button
          className="mt-3 mb-3  py-1 px-3 align-items-center fs-4 rounded"
          type="button"
          class="btn btn-light"
        >
          <ImGoogle /> Google
        </button>
      </div>
    </div>
    );
};

export default SignUp;