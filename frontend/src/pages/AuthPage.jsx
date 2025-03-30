import React, { useContext, useEffect, useState } from "react";
import Login from "../components/Login.jsx";
import Register from "../components/Register.jsx";
import Navbar from "../components/Navbar.jsx";
import { AuthContext } from "../context/AuthContextApi.jsx";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { authenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (authenticated) navigate("/user");
  })

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <Navbar name="Back" path="/" />
      {isLogin ? <Login setIsLogin={setIsLogin} /> : <Register setIsLogin={setIsLogin} />}
    </div>
  );
};

export default AuthPage;
