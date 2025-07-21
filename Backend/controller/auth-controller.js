const { User } = require("../models/user-model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {

    const { name, email, password } = req.body;

    try {
        const userExists = await User.findOne({ email });
        if (userExists) res.status(400).json({ success: false, message: "User already exists" });

        const newUser = new User({ name, email, password });
        const hashedPassword = await bcrypt.hash(password, 10);
        newUser.password = hashedPassword;
        const token = jwt.sign({
            id: newUser._id
        }, process.env.JWT_SECRET, { expiresIn: '1h' });
        newUser.token = token;

        await newUser.save();

        res.status(201).json({ token, message: "User created successfully! ", success: true });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const userExists = await User.findOne({ email });
        if (!userExists) res.status(404).json({ success: false, message: "User with this email does not exists !" });

        const passwordcompare = await bcrypt.compare(password, userExists.password);
        if (!passwordcompare) res.status(401).json({ success: false, message: "Invalid credentials !" });

        const token = jwt.sign({
            email
        }, process.env.JWT_SECRET, { expiresIn: '1h' });
        userExists.token = token;

        await userExists.save();

        res.status(401).json({ token, message: "User logged in successfully! ", success: true });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}