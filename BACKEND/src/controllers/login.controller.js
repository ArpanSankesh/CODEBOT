const bcrypt = require("bcrypt");
const UserModel = require("../models/User");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;
const login = async (req, res) => {
    try {
        const { email, password} = req.body;
        const user = await UserModel.findOne({email});
        if (!user) {
            return res.status(403).json({ message: "Auth failed or password is wrong" , success: false});
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(403).json({ message: "Auth failed or password is wrong" , success: false});
        }
        const token = jwt.sign (
            {email: user.email, _id: user._id},
            JWT_SECRET,
            { expiresIn: "24h" }
        )
        
        res.status(200).json({ message: "Login successfully", success: true, token, email, name: user.name });

    } catch (err) {
        res.status(500).json({ message: "Internal server error", success: false });
    }
}

module.exports = {
    login
}