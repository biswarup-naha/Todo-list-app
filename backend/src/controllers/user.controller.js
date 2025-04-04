import { User } from "../models/user.model.js";
import { generateToken } from "../utils/token.js";
import jwt from 'jsonwebtoken';

const cookieOptions = {
    httpOnly: true,
    secure: true
}

export const registerUser = async (req, res) => {
    const { name, phone, email, password } = req.body;

    if (!name || !phone || !email || !password) {
       return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const existingUser = await User.findOne({ $or:[{email,phone}] });
    if (existingUser) {
        return res.status(409).json({ success: false, message: "user with this email or phone already exists" });
    }
    try {
        const user = await User.create({ name, phone, email, password });
        if (user) {
            const token = generateToken(user);
            const data = {
                _id: user._id,
                name:user.name,
                phone:user.phone,
                email:user.email
            }
            res.status(200).cookie("authToken",token,cookieOptions);
            res.status(201).json({ success: true, message: "User registered", data , token });
        }
    } catch (error) {
        return res.status(500).json({ success: false, message: error?.message || "Internal server error" });
    }  
}

export const loginUser = async (req, res) => {
    try {
        const { phone, email, password } = req.body;
        if (!email || !phone || !password) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ success: false, message: "Please enter a registered email or phone number" });
        }
        if (!(await user.validatePassword(password))) {
            return res.status(400).json({ success: false, message: "Please enter the correct password" });
        }
        else {
            const token = generateToken(user);
            const data = {
                _id: user._id,
                name: user.name,
                phone: user.phone,
                email: user.email
            }
            res.status(200).cookie("authToken",token,cookieOptions).json({ success: true, message: "User logged in", data, token });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: error?.message || "Internal server error" });
    }
}

export const logoutUser = async (req, res) => {
    try {
        res.status(200).cookie("authToken", "", { httpOnly: true, expires: new Date(Date.now()) }).json({ success: true, message: "User logged out" });
    } catch (error) {
        res.status(500).json({ success: false, message: error?.message || "Internal server error" });
    }
}

export const verify = async (req, res) => {
    try {
        const token = req.cookies.authToken;

        if (!token) {
            return res.status(401).json({ success: false, message: "No token provided" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decoded._id).select("-password");

        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        return res.status(200).json({ success: true, user });
    } catch (error) {
        console.error("Token verification error:", error);
        return res.status(401).json({ success: false, message: "Invalid or expired token" });
    }
};