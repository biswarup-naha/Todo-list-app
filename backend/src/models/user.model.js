import mongoose from 'mongoose';
import userZodSchema from '../schema/user.js';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        phone: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
    },
    { timestamps: true }
);

userSchema.pre('save', async function (next) {
    const user = this;
    if (!user.isModified('password')) {
        return next();
    }
    const hashedPassword = await user.generateHashedPassword();
    user.password = hashedPassword;
    next();
});

userSchema.pre("validate", function (next) {
    try {
        userZodSchema.parse(this.toObject());
        next();
    } catch (error) {
        next(new Error(error.errors.map((e) => e.message).join(", ")));
    }
});

userSchema.methods.generateHashedPassword = async function () {
    const user = this;
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(user.password, salt);
};

userSchema.methods.validatePassword = async function (password) {
    const user = this;
    return await bcrypt.compare(password, user.password);
};

export const User = mongoose.model('User', userSchema);