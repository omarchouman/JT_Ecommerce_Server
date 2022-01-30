const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
//REGISTER
const registerUser = async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SECRET).toString(),
    });

    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json(err);
    }
}

//LOGIN
const loginUser = async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        !user && res.status(401).json("Wrong username or password");
        const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SECRET);
        const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
        OriginalPassword !== req.body.password && res.status(401).json("Wrong username or password");
        const accessToken = jwt.sign({ _id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET, { expiresIn: "1h" });
        const {password, ...userWithoutPassword} = user.toObject();
        res.status(200).json({userWithoutPassword, accessToken});
    } catch (err) {
        res.status(500).json(err);
    }
}

module.exports = {registerUser, loginUser};