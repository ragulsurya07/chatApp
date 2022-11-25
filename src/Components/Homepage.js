import React, { useContext } from 'react'
import {BrowserRouter as  Router, Routes, Route, Navigate} from 'react-router-dom';
import { AuthContext } from '../Context/Authcontext';
import Dashboardpage from './Dashboardpage';
import Login from './Login';
import SignupPage from './SignupPage';

const Homepage = () => {

  const {currentUser} = useContext(AuthContext)
  
  const ProtectedRoute = ({children}) =>{
    if(!currentUser){
      return <Navigate to="/login" />
    }
    return children
  }

  return (
    <div>
         <Router>
             <Routes>
                <Route path='/signup' element={<SignupPage />} />
                <Route path='/login' element={<Login/>} />
                <Route path='/dashboard' element={
                  <ProtectedRoute>
                  <Dashboardpage/>
                  </ProtectedRoute>
                }/>
                <Route path='/' element={ <Login/> } />
            </Routes>
        </Router>
    </div>
  )
}

export default Homepage
