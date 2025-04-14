const bcrypt = require("bcrypt");
const UserModel = require("../models/User");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;


const signup = async (req, res) => {
    try {
        const {name , email, password} = req.body;
        const user = await UserModel.findOne({email});
        if (user) {
            return res.status(400).json({ message: "User already exists" , success: false});
        }
        const userModel = new UserModel({ name, email, password});
        userModel.password = await bcrypt.hash(password, 10);
        console.log(userModel.password);
        await userModel.save();
        res.status(200).json({ message: "Signup successfully", success: true });

    } catch (err) {
        res.status(500).json({ message: "Internal server error", success: false });
    }

}



module.exports = {
    signup
}