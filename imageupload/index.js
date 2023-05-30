const express= require('express');
const path= require('path');
//express Server
const app= express();
//configuring multer
const multer= require('multer');

//setting up storage engine
const storageEngine= multer.diskStorage({
    destination:"./images",
    filename:(req,file,cb)=>{
        cb(null,`${Date.now()}--${file.originalname}`)
    }
})
//initialize multer (storage Engine)
const upload=multer({
    storage:storageEngine,
    limits:{fileSize:100000},//1MB
    fileFilter:(req,file,cb)=>{
        checkFileType(file,cb)
    }
})
app.post('/imageUpload',upload.single("image"),(req,res)=>{
    if(req.file){
        res.send("Image uploaded Successfully")
    }else{
        res.status(400).send("Please upload a valid image")
    }
})

app.get("/",(req,res)=>{
    res.send("Working........")
})
app.listen(5000,()=>{
    console.log("App is listening on the Port No 5000")
})

const checkFileType= function(file,cb){
    const fileTypes= /jpeg|jpg|png|gif|svg/;
    //check the extentions
    const extName= fileTypes.test(path.extname(file.originalname).toLowerCase())

    const mimeType=fileTypes.test(file.mimetype);

    if(extName && mimeType){
        return cb(null,true);
    }else{
        cb("Error....!!! You can only upload Images.......")
    }
}