const express= require('express');
const { addStudent } = require('./studentController');

const app= express();
app.use(express.json());

app.get("/student",(req,res)=>{res.send("Done")});
app.post("/student",addStudent);

app.listen(5000,()=>{
    console.log("App Started")
})