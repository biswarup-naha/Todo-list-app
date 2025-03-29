import { useState } from 'react'
import {motion} from 'framer-motion'

const Home = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-6">
            <header className="text-center mb-10">
                <h1 className="text-[150px] max-md:text-7xl font-extrabold text-blue-400">TaskGrid</h1>
                <p className="text-lg text-gray-400">Streamline your tasks with ease.</p>
            </header>

            <main className="text-center max-w-3xl">
                <p className="text-lg max-md:text-md mb-6">
                    Organize, track, and complete your daily tasks efficiently with our intuitive To-Do App.
                </p>
                <a
                    href="/auth"
                    className="px-6 py-3 bg-blue-500 text-white text-lg rounded-lg shadow-md hover:bg-blue-600 transition-all"
                >
                    Get Started
                </a>
            </main>

            <footer className="absolute bottom-5 text-gray-500 text-sm">
                © 2025 TaskGrid. All rights reserved.
            </footer>
        </div>
    );
}

export default Home