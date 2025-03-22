import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET === "" ? 'abcd789456efgh' : process.env.JWT_SECRET;

export const generateToken = (user) => {
    const payload = {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
    };
    return jwt.sign(payload, secret, { expiresIn: '1h' });
}
 
export const verifyToken = (token) => {
    try {
        returnjwt.verify(token, secret);
    } catch (error) {
        return null;
    }
}