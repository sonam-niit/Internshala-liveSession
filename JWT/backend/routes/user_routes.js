const express= require('express');
const { getAllUsers,getUserById, updateUser, deleteUserById } = require('../controller/user_controller');
const isAuthenticated = require('../middleware/protected_route');

const router= express.Router();

router.get("/",getAllUsers);
router.get("/profile",isAuthenticated,(req,res)=>{
    res.send({message:"Profile Page",user:req.user})
})
router.get("/:id",isAuthenticated,getUserById);
// router.put("/:id",isAuthenticated,updateUser)
// router.delete("/:id",isAuthenticated,deleteUserById);


module.exports= router;