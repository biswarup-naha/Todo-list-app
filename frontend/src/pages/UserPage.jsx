import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../context/AuthContextApi.jsx'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';

const UserPage = () => {
  const navigate = useNavigate();
  const { authenticated, user } = useContext(AuthContext);

  useEffect(() => {
    if (!authenticated) navigate("/")
  })

  return (
    authenticated && <div>
      <Navbar name="Log out" path="/user" logout={true} />
      <h1 className='text-3xl text-center p-6'>Welcome { user.name }!!</h1>
    </div >
)}

export default UserPage;