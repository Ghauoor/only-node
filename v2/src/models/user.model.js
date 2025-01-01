import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import bycrpt from 'bcrypt';


const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true
    },
    fullName: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        index: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: true
    },
    coverImage: {
        type: String,
    },

    watchHistory: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Video'
    }],
    refreshToken: {
        type: String,
    }
}, { timestamps: true });


userSchema.pre('save', async function (next) {
    if (!this.isModified('password'))
        return next();

    this.password = await bycrpt.hash(this.password, 10);
    next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
    return await bycrpt.compare(password, this.password);
}

userSchema.methods.generateAccessToken = function () {
    const token = jwt.sign({ _id: this._id, userName: this.userName, fullName: this.fullName, email: this.email }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN });
    this.refreshToken = token;
    return token;
}

userSchema.methods.generateRefreshToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN });
    this.refreshToken = token;
    return token;
}


export const User = mongoose.model('User', userSchema);

