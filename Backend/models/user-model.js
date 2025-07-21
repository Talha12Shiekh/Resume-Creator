const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: { type: String, required: [true, "User name is required! "], maxLength: [16, "User name should be of maximum 16 digits"], minLength: [5, "User name should have at least 5 digits"] },

    email: {
        type: String,
        required: [true, "Email address is required! "],
        unique: [true, "Email should be unique! "],
        validate: {
            validator: function (value) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            },
            message: 'Invalid email address format',
        },
    },

    password: { type: String, minLength: [6, "Password should be minimum of 6 digits"], required: [true, "Password is required! "] },
    token:String
});

exports.User = mongoose.model('User', UserSchema);