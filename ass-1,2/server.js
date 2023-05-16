const express= require('express');

const app= express();

//read json data from post request
app.use(express.json()) //use body parser

app.get("/api/student",(req,res)=>{

    const obj={id:1,name:"sonam",email:"sonam@gmail.com"};
    res.status(200).send(obj);
})
//Let'c create a new Object
app.post("/api/student",(req,res)=>{
    console.log(req.body)
    res.status(201).send(req.body);
})
//Let's delete
app.delete("/api/student/:id",(req,res)=>{
    const id= req.params.id;
    res.status(200).send({"message":`Data Deleted for ${id}` });
})
//Let's update
app.put("/api/student/:id",(req,res)=>{
    const id= req.params.id;
    res.status(200).send({"message":`Data Updated for ${id}` });
})


app.listen(5000,()=>{console.log("Server Started")})