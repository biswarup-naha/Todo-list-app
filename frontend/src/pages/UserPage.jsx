import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../context/AuthContextApi.jsx'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';

const UserPage = () => {
  const navigate = useNavigate();
  const { authenticated } = useContext(AuthContext);

  useEffect(() => {
    if (!authenticated) navigate("/")
  })

  return (
    authenticated && <div>
      <Navbar name="Log out" path="/user" logout={true} />
      UserPage
    </div >
)}

export default UserPage;