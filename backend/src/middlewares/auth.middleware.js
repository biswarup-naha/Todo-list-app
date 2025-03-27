import { verifyToken } from "../utils/token.js";
import { User } from "../models/user.model.js";

export const verifyAuth = async (req, res, next) => {
    try {
        const token = req.cookies?.authToken || req.header("Authorization")?.replace("Bearer ", ""); 
        
        if (!token) return res.status(401).json({ success: false, message: "Unauthorized request" });
        
        const decodedToken = verifyToken(token);
        // console.log(decodedToken)
        const user = await User.findById(decodedToken._id).select("-password");
        // console.log(user)
        if (!user) return res.status(401).json({ success: false, message: "Invalid access token" });
    
        req.user = user;
        next(); 
    } catch (error) {
        res.status(500).json({ success: false, message: error?.message || "Internal server error" });
    }
}
