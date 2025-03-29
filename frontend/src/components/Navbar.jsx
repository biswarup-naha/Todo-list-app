import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
      <nav className="bg-gray-800 shadow-md p-4 w-full fixed top-0 left-0 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-purple-400 ml-4">Task<span className="text-white">Grid</span></h1>
          <div className="mr-4">
              <Link to="/">
                  <button
                      className="px-4 py-2 border border-purple-400 text-purple-400 rounded-lg hover:bg-purple-400 hover:text-gray-900 transition"
                  >
                      Back
                  </button>
              </Link>
          </div>
      </nav>
  )
}

export default Navbar