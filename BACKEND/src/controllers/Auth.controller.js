const bcrypt = require("bcryptjs");
const UserModel = require("../models/User");


const signup = async (req, res) => {
    try {
        const {name , email, password} = req.body;
        const user = await UserModel.findOne({email});
        if (user) {
            return res.status(400).json({ message: "User already exists" , success: false});
        }
        const UserModel = new UserModel({ name, email, password});
        UserModel.password = await bcrypt.hash(password, 10);
        await UserModel.save();


    } catch (err) {
        
    }

}

module.exports = {
    signup
}