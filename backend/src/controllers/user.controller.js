/* Welcome to the short tutorial today, we are going to learn how to register a user in the database */

import { User } from "../models/user.model.js";
import { generateToken } from "../utils/token.js";

export const registerUser = async (req, res) => {
    const { name, phone, email, password } = req.body;

    if (!name || !phone || !email || !password) {
       return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email, phone });
    if (existingUser) {
        return res.status(409).json({ success: false, message: "user with this email or phone already exists" });
    }
    try {
        const user = await User.create({ name, phone, email, password });
        if (user) {
            const token = generateToken(user);
            const data = {
                name:user.name,
                phone:user.phone,
                email:user.email
            }
            res.cookie(token);
            res.status(201).json({ success: true, message: "User registered", data , token });
        }
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message?error.message:"Internal server error" });
    }  
}

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ success: false, message: "Please enter a registered email" });
        }
        if (!(await user.validatePassword(password))) {
            return res.status(400).json({ success: false, message: "Please enter the correct password" });
        }
        else {
            const token = generateToken(user);
            const data = {
                name: user.name,
                phone: user.phone,
                email: user.email
            }
            res.cookie(token);
            res.status(200).json({ success: true, message: "User logged in", data, token });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}