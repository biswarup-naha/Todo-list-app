import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContextApi";
import axios from 'axios'
import { toast } from "sonner";
import { Navigate, useNavigate } from "react-router-dom";
import Loading from "./Loading";

export function Login({ setIsLogin }) {
    const {
        login,
        logout,
        loading,
        user,
        setUser
    } = useContext(AuthContext);

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        await login({ email, phone, password }, navigate);
    };

    return (
        loading ? <Loading /> :
            user ? navigate("/user") :
        <div className="flex items-center justify-center min-h-screen text-white">
            <form className="p-8 rounded-2xl shadow-2xl text-center w-96" onSubmit={e=>handleLogin(e)}>
                <h2 className="text-3xl font-bold mb-4 text-purple-400">Login</h2>
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 rounded-md  mb-3 focus:outline-none"
                    onChange={(e) => setEmail(e.target.value)}
                    
                />
                <input
                    type="phone"
                    placeholder="Phone no."
                    className="w-full p-3 rounded-md  mb-3 focus:outline-none"
                    onChange={(e) => setPhone(e.target.value)}
                    
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-3 rounded-md  mb-3 focus:outline-none"
                    onChange={(e) => setPassword(e.target.value)}
                    
                />
                <button
                    type="submit"
                    className="w-full py-3 mt-3 bg-purple-600 hover:bg-purple-700 rounded-md transition-all"
                >
                    Login
                </button>
                <p className="mt-4 text-sm">
                    Don't have an account?{" "}
                    <span
                        className="text-purple-400 hover:underline cursor-pointer"
                        onClick={() => setIsLogin(false)}
                    >
                        Sign up
                    </span>
                </p>
            </form>
        </div>
    );
}

export default Login;
