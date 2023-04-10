const asyncHandler= require("express-async-handler");

//@desc Get Contacts
//@Route GET /api/contacts/
//@access public
const getContacts=asyncHandler( async (req,res)=>{
    res.status(200).json({message:`Get All Contacts`})
});

//@desc Post Contacts
//@Route POST /api/contacts/
//@access public
const createContact= asyncHandler( async (req,res)=>{
    console.log("The Request body is ",req.body);
    const {name,email,phone}=req.body;
    if(!name ||!email ||!phone){
        res.status(400);
        throw new Error("All Fields are mendatory !")
    }
    res.status(201).json({message:`Contact Created Successfully`})
});
//@desc Get Contact
//@Route get /api/contacts/:id
//@access public
const getContact=asyncHandler( async(req,res)=>{
    res.status(200).json({message:`Get Contact for ${req.params.id}`})
})

//@desc Update Contact
//@Route put /api/contacts/:id
//@access public
const updateContact=asyncHandler( async (req,res)=>{
    res.status(200).json({message:`Update Contact for ${req.params.id}`})
})

//@desc Delete Contact
//@Route delete /api/contacts/:id
//@access public
const deleteContact=asyncHandler( async (req,res)=>{
    res.status(200).json({message:`Delete Contact for ${req.params.id}`})
})
module.exports = 
    {getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact}