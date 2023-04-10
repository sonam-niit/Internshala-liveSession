const express= require("express");
const {getContacts,createContact,getContact,updateContact,deleteContact} 
= require("../controller/conatctController");
const router= express.Router();

router.route("/").get(getContacts).post(createContact);
router.route("/:id").put(updateContact).delete(deleteContact).get(getContact);

// router.route("/").get(getContacts);
// router.route("/").post(createContact);
// router.route("/:id").put(updateContact);
// router.route("/:id").delete(deleteContact);
// router.route("/:id").get(getContact);

module.exports=router;