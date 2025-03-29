import React, { useState } from "react";
import Login from "../components/Login.jsx";
import Register from "../components/Register.jsx";
import Navbar from "../components/Navbar.jsx";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <Navbar />
      {isLogin ? <Login setIsLogin={setIsLogin} /> : <Register setIsLogin={setIsLogin} />}
    </div>
  );
};

export default AuthPage;
