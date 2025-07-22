const jwt = require("jsonwebtoken");

const authMiddlewear = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "Access denied" });
    }

    try {
        const verifiedid = jwt.verify(token, process.env.JWT_SECRET);
        if (verifiedid) {
            req.veruserid = verifiedid.id;
        }
        next();
    } catch (error) {
        console.log(error.message);
        return res.status(403).json({ message: "Invalid Token" });
    }
}

module.exports = authMiddlewear;