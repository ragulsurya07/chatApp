import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";
import Navbar from "./Navbar";
import "./Loginpage.css"

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard")
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit} className='cover'>
        <h1 className='head'>Login</h1>
        <div className='page'>
          <input className='inputbox' type="text" placeholder='Email ID' />
        </div>
        <div className='page'>
          <input className='inputbox' type="password" placeholder='Password'  />
        </div>

        {err && <span className="page warning">Something went wrong</span>}

        <div className='page'>
          <button type='submit' className='loginbtn'>Login</button>
        </div>
        <h3 className='page'>You don't have an account? <Link to="/signup">SignUp</Link></h3>
      </form>
    </div>
  );
};

export default Login;