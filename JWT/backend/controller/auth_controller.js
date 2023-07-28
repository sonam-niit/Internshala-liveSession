const UserModel = require('../models/user_model')
const bcrypt= require("bcrypt")
const dotenv= require("dotenv").config();
const jwt= require('jsonwebtoken')

const register = async (req, res) => {
    const { name, email, username, password } = req.body;
    if (!name || !email || !username || !password) {
        return res.status(400)
            .json({ message: "Name, Email, UserName and Password are mandatory Fields" })
    }
    const user = await UserModel.findOne({ email });
    if (user) {
        return res.status(400).json({ message: "Email is already registered" })
    }
    const user1 = await UserModel.findOne({ username });
    if (user1) {
        return res.status(400).json({ message: "Username is already registered" })
    }

    //Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({
        name,
        email,
        username,
        password: hashedPassword
    });
    await newUser.save();
    res.status(201)
      .json({message:"User Registered Successfully"})
}
const login = async (req, res) => {
    const { username, password } = req.body;
    if (!username ||!password) {
        return res.status(400)
           .json({ message: "Username and Password are mandatory Fields" })
    }
    const foundUser = await UserModel.findOne({ username });
    if (!foundUser) {
        return res.status(400)
            .json({ message: "Username is not registered" })
    }
    const match=await bcrypt.compare(password,foundUser.password);
    const jwtToken= jwt.sign({_id:foundUser._id},process.env.JWT_SECRET);
        const payload={
            _id:foundUser._id,
            email:foundUser.email,
            fname:foundUser.fname
        };
    if(match){
        //res.status(200).json({token:jwtToken,userDetails:payload});
        // Set the token as an HTTP-only cookie
        res.cookie('jwt', jwtToken, { httpOnly: true });
        //res.json({ message: 'Login successful' });
        res.status(200).json({token:jwtToken,userDetails:payload})
    }else{
        return res.status(400).json({ message: "invalid Credentials" })
    }
}

const logout=(req, res) => {
    // Clear the JWT cookie to log the user out
    res.clearCookie('jwt');
    res.json({ message: 'Logout successful' });
  }

module.exports = {
    register,
    login,
    logout
}