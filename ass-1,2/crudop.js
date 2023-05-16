const express= require('express');
const storage= require('node-persist');
const app= express();
app.use(express.json())//body parser

//initialize a storage
storage.init();

//Get All Data
app.get("/student",async (req,res)=>{
    const data=await storage.values();
    let html=`
        <table><tr>
        <th>Name</th><th>Email</th><th>Country</th></tr>
    `
    const data1= data.forEach(ele=>{
        html+= `<tr>
            <td>${ele.name}</td>
            <td>${ele.email}</td>
            <td>${ele.country}</td>
        </tr>`
    })
    html+='</table>'
    res.status(200).send(html);
})
//Get All Data
app.get("/student/india",async (req,res)=>{
    const data=await storage.values();
    
    const result=data.filter((ele)=>ele.country==='India');
    res.status(200).send(result);
})
//Get student
app.get("/student/:id",async (req,res)=>{
    const id= req.params.id;
    const data=await storage.getItem(id);
    res.status(200).send(data);
})
//Create New object
app.post("/student",(req,res)=>{
    //get the object from request body
    const {id,name,email,country}= req.body;
    storage.setItem(id,{name:name,email:email,country:country});//storing object into the storage
    res.status(201).send({"message":"Student stored in Storage"})
})
//Delete Perticular Student data
app.delete("/student/:id",(req,res)=>{

})
//Update Student data
app.put("/student/:id",(req,res)=>{

})

app.listen(5000,()=>{console.log("Server Started of Port 5000")});