const { User } = require("../models/user-model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {

    const { name, email, password } = req.body;

    try {
        const userExists = await User.findOne({ email });
        if (userExists) return res.status(400).json({ success: false, message: "User already exists" });

        let token = null;
        const newUser = new User({ name, email, password });
        if (password && password.trim() != "") {
            const hashedPassword = await bcrypt.hash(password, 10);
            newUser.password = hashedPassword;
            token = jwt.sign({
                id: newUser._id
            }, process.env.JWT_SECRET, { expiresIn: '1h' });
            newUser.token = token;
        }
        await newUser.save();

        return res.status(201).json({ token, message: "User created successfully! ", success: true });

    } catch (error) {
        if (error.name == "ValidationError") {
            const messages = Object.values(error.errors).map((e) => e.message);
            return res.status(400).json({ success: false, messages });
        }
        return res.status(500).json({ success: false, message: error.message })
    }
}

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {

        const errors = [];
        if (!email || email.trim() === "") errors.push("Email is required!");
        if (!password || password.trim() === "") errors.push("Password is required!");

        if (errors.length > 0) {
            return res.status(400).json({ success: false, messages: errors });
        }

        const userExists = await User.findOne({ email });
        if (!userExists) return res.status(404).json({ success: false, message: "User with this email does not exists !" });

        const passwordcompare = await bcrypt.compare(password, userExists.password);
        if (!passwordcompare) return res.status(401).json({ success: false, message: "Invalid credentials !" });

        const token = jwt.sign({
            id: userExists._id
        }, process.env.JWT_SECRET, { expiresIn: '1h' });
        userExists.token = token;

        await userExists.save();

        return res.status(401).json({ token, message: "User logged in successfully! ", success: true });

    } catch (error) {
        return res.status(500).json({ success: false, message: error.message })
    }
}