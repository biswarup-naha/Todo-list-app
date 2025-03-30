import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from '../context/AuthContextApi.jsx';
import { toast } from 'sonner';

const Navbar = ({ name, path, logout }) => {
    const { setAuthenticated, setUser } = useContext(AuthContext);

    const handleLogout = () => {
        localStorage.removeItem("authenticated");
        localStorage.removeItem("user");
        setAuthenticated(false);
        setUser(null);
        toast.success("User logged out")
    };

  return (
      <nav className="bg-gray-800 shadow-md p-4 w-full fixed top-0 left-0 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-purple-400 ml-4">Task<span className="text-white">Grid</span></h1>
          <div className="mr-4">
              <Link to={path}>
                  <button
                      className="px-4 py-2 border border-purple-400 text-purple-400 rounded-lg hover:bg-purple-400 hover:text-gray-900 transition"
                      onClick={logout && handleLogout}
                  >
                      {name}
                  </button>
              </Link>
          </div>
      </nav>
  )
}

export default Navbar