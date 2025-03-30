import { useState } from 'react'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom';

const Home = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-6">
            <header className="text-center mb-10">
                <h1 className="text-[150px] max-md:text-7xl font-extrabold text-purple-500">Task<span className="text-white">Grid</span></h1>
                <p className="text-lg text-gray-400">Streamline your tasks with ease.</p>
            </header>

            <main className="text-center max-w-3xl">
                <p className="text-lg max-md:text-md mb-6">
                    Organize, track, and complete your daily tasks efficiently with our intuitive To-Do App.
                </p>
                <Link to="/auth"
                    className="px-6 py-3 bg-purple-600 text-white text-lg rounded-lg shadow-md hover:bg-purple-800 transition-all"
                >
                    Get Started
                </Link>
            </main>

            <footer className="absolute bottom-5 text-gray-500 text-sm">
                © 2025 TaskGrid. All rights reserved.
            </footer>
        </div>
    );
}

export default Home