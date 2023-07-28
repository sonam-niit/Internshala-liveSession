const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();
const UserModel = require('../models/user_model')   

// Middleware to check if the user is authenticated
const isAuthenticated = async (req, res, next) => {
    const token = req.cookies.jwt;
    if (!token) {
        return res.status(401).json({ message: "You are not logged in" })
    }
    try {
        jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
            if (err) {
                return res.status(401).json({ message: 'Invalid token' });
            }
            const { _id } = payload;
            UserModel.findById(_id)
                .then((dbUser) => {
                    req.user = dbUser;
                    next();
                })
        })
    } catch (error) {
        console.log(error)
    }

}
module.exports = isAuthenticated
