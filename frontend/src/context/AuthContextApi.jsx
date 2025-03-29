import { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    return (
        <AuthContext.Provider
            value={{ email, phone, password, setEmail, setPhone, setPassword }}
        >
            {children}
        </AuthContext.Provider>
    );
};
