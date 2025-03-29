import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <nav className=''>
                <ul className='flex justify-evenly bg-gray-300 h-10'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/auth">AuthPage</Link></li>
                    <li><Link to="/user">UserPage</Link></li>
                </ul>
            </nav>
            <main><Outlet /></main>
        </>
    )
}

export default Layout