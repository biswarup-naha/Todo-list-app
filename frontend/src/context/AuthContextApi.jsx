import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "sonner";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    // Check authentication status on mount and when user changes
    useEffect(() => {
        setTimeout(() => {
            verifyAuth();
        }, 1000)
        const verifyAuth = async () => {
            try {
                const storedUser = localStorage.getItem("user");

                if (storedUser) {
                    const response = await axios.get("http://localhost:5000/api/v1/user/verify", {
                        withCredentials: true
                    });

                    if (response.data.success) {
                        setUser(JSON.parse(storedUser));
                    } else {
                        localStorage.removeItem("user");
                        setUser(null);
                    }
                }
            } catch (error) {
                console.error("Auth verification failed:", error);
                localStorage.removeItem("user");
                setUser(null);
            } finally {
                setLoading(false);
            }
        };
    }, []);

    const login = async ({email,phone,password}, navigate) => {
        try {
            const res = await axios
                .post("http://localhost:5000/api/v1/user/login", {
                    email,
                    phone,
                    password,
                }, { withCredentials: true });
            localStorage.setItem("user", JSON.stringify(res.data.data));
            setUser(res.data.data);
            navigate("/user");
            toast.success("User logged in");
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.message)
        }
    };

    const signout = async () => {
        try {
            await axios.post("http://localhost:5000/api/v1/user/logout", {}, {
                withCredentials: true
            });
            toast.success("Logout successful")
        } catch (error) {
            console.error("Logout error:", error);
        } finally {
            localStorage.removeItem("user");
            setUser(null);
        }
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
                login,
                signout,
                setUser
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};