import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const NoPage = () => {
  return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
          <motion.h1
              className="text-9xl font-bold"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
          >
              404
          </motion.h1>
          <p className="text-xl mt-4">Oops! The page you're looking for doesn't exist.</p>
          <Link
              to="/"
              className="mt-6 px-6 py-3 bg-blue-500 text-white text-lg rounded-lg shadow-md hover:bg-blue-600 transition-all"
          >
              Go Home
          </Link>
      </div>
  )
}

export default NoPage