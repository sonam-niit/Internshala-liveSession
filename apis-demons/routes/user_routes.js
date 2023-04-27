const express = require('express');
const {getAllUser,getUserById,updateUser,deleteUser,createNewUser}= require("../controllers/user_controller")
const router = express.Router();

//get ALL users //Create New User
router.route("/").get(getAllUser).post(createNewUser)

//Delete User By Id //update // get userById
router.route("/:id").delete(deleteUser).put(updateUser).get(getUserById)


module.exports=router