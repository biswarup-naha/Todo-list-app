
export function Login({ setIsLogin }) {
    return (
        <div className="flex items-center justify-center min-h-screen text-white">
            <div className="p-8 rounded-2xl shadow-2xl text-center w-96">
                <h2 className="text-3xl font-bold mb-4 text-purple-400">Login</h2>
                <input type="email" placeholder="Email" className="w-full p-3 rounded-md  mb-3 focus:outline-none" />
                <input type="phone" placeholder="Phone no." className="w-full p-3 rounded-md  mb-3 focus:outline-none" />
                <input type="password" placeholder="Password" className="w-full p-3 rounded-md  mb-3 focus:outline-none" />
                <button className="w-full py-3 mt-3 bg-purple-600 hover:bg-purple-700 rounded-md transition-all">Login</button>
                <p className="mt-4 text-sm">Don't have an account? <span className="text-purple-400 hover:underline cursor-pointer" onClick={() => setIsLogin(false)}>Sign up</span></p>
            </div>
        </div>
    );
}

export default Login;