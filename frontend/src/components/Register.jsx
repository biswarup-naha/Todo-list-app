import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContextApi";
import axios from "axios";
import { toast } from "sonner";

export function Register({ setIsLogin }) {
    const { setUser, setAuthenticated } = useContext(AuthContext);

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:5000/api/v1/user/register", {
                name,
                phone,
                email,
                password,
            });
            setUser(res.data.data);
            setAuthenticated(true);
            toast.success("User registered successfully");
            setIsLogin(true); 
        } catch (error) {
            toast.error(error.response.data.message)
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen text-white">
            <form className="p-8 rounded-2xl shadow-2xl text-center w-96" onSubmit={handleRegister}>
                <h2 className="text-3xl font-bold mb-4 text-purple-400">Register</h2>
                <input
                    type="text"
                    placeholder="Name"
                    className="w-full p-3 rounded-md mb-3 focus:outline-none"
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="phone"
                    placeholder="Phone no."
                    className="w-full p-3 rounded-md mb-3 focus:outline-none"
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 rounded-md mb-3 focus:outline-none"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-3 rounded-md mb-3 focus:outline-none"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button
                    type="submit"
                    className="w-full py-3 mt-3 bg-purple-600 hover:bg-purple-700 rounded-md transition-all"
                >
                    Sign Up
                </button>
                <p className="mt-4 text-sm">
                    Already have an account?{" "}
                    <span className="text-purple-400 hover:underline cursor-pointer" onClick={() => setIsLogin(true)}>
                        Login
                    </span>
                </p>
            </form>
        </div>
    );
}

export default Register;
