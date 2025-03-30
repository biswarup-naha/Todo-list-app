import { useContext } from "react";
import { AuthContext } from "../context/AuthContextApi";
import axios from 'axios'
import { toast } from "sonner";

export function Login({ setIsLogin }) {
    const {
        email,
        phone,
        password,
        setEmail,
        setPhone,
        setPassword,
        authenticated,
        user,
        setAuthenticated,
        setUser
    } = useContext(AuthContext);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios
                .post("http://localhost:5000/api/v1/user/login", {
                    email,
                    phone,
                    password,
                });

            // console.log(res.data)
            if (res.data.success) {
                setUser(res.data.data);
                setAuthenticated(true);
                toast.success("User logged in")
                // console.log("User authenticated:", authenticated); 
            }
            else {
                //toast success false and error
                toast.error(res.data.message);
            }
        } catch (error) {
            //toast error connecting backend
            toast.error(error.name)
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen text-white">
            <form className="p-8 rounded-2xl shadow-2xl text-center w-96" onSubmit={e=>handleLogin(e)}>
                <h2 className="text-3xl font-bold mb-4 text-purple-400">Login</h2>
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 rounded-md  mb-3 focus:outline-none"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="phone"
                    placeholder="Phone no."
                    className="w-full p-3 rounded-md  mb-3 focus:outline-none"
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-3 rounded-md  mb-3 focus:outline-none"
                    onChange={(e) => setPassword(e.target.value)}
                    required
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
