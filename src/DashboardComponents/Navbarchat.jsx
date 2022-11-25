import { signOut } from 'firebase/auth'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/Authcontext'
import { auth } from '../Firebase'

const Navbarchat = () => {
  const {currentUser}=useContext(AuthContext)

  const navigate= useNavigate();

  const LogoutUser =()=> {
    signOut(auth);
    navigate('/login')
  }

  return (
    <div className='navbar'>
      <span className='logo'>Chatogram</span>
      <div className="user">
        <span>{currentUser.displayName}</span>
        <button onClick={LogoutUser}>Logout</button>
      </div>
    </div>
  )
}

export default Navbarchat
