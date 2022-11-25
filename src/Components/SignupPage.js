import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../Firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./Loginpage.css"

const SignupPage = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      
      await updateProfile(res.user, {
        displayName,
      });
      await setDoc(doc(db, "users", res.user.uid), {
        uid: res.user.uid,
        displayName,
        email
      });

      await setDoc(doc(db, "userChats", res.user.uid), {});
      navigate("/dashboard");

        
  } catch (err) {
    setErr(true);
    setLoading(false);
  }
};

  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit} className='cover'>
        <h1 className='head'>SignUp</h1>
        <div className='page'>
          <input className='inputbox' type="text" placeholder='User name'/>
        </div>
        <div className='page'>
          <input className='inputbox' type="text" placeholder='Email ID' />
        </div>
        <div className='page'>
          <input className='inputbox' type="password" placeholder='Password'  />
        </div>

        {loading && <span className="page warning">"please wait..."</span>}
        {err && <span className="page warning">Something went wrong</span>}

        <div className='page'>
          <button type='submit' className='loginbtn'>Login</button>
        </div>
        <h3 className='page'>You do have an account? <Link to="/login">Login</Link></h3>
      </form>
    </div>

  );
};

export default SignupPage;