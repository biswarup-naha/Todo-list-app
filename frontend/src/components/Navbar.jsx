import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from '../context/AuthContextApi.jsx';
import { toast } from 'sonner';
import axios from 'axios'

const Navbar = ({ name, path, logout }) => {
    const { setAuthenticated, setUser } = useContext(AuthContext);

    const handleLogout = async () => {
        localStorage.removeItem("authenticated");
        localStorage.removeItem("user");
        setAuthenticated(false);
        setUser(null);
        toast.success("User logged out")

        try {
            await axios.post("http://localhost:5000/api/v1/user/logout")
        } catch (error) {
            console.log(error.response.data.message)
            console.clear()
        }
    };

  return (
      <nav className="bg-gray-800 shadow-md p-4 w-full fixed top-0 left-0 flex justify-between items-center relative">
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