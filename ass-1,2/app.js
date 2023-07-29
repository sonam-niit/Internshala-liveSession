const express= require('express');
const storage= require('node-persist');
const app= express();
app.use(express.json())//JSON Parser
storage.init();

//Add New Details
app.post("/api/product",(req,res)=>{
    const obj= req.body;
    storage.setItem(obj.id,obj);
    res.send("Object Created")
})
//get All Values
app.get("/api/product",async (req,res)=>{
    const resp=await storage.values();
    res.send(resp);
})
//get Only One record based on Id
app.get("/api/product/:id",async (req,res)=>{
    const id= req.params.id;
    const resp=await storage.getItem(id);
    
    const result=`<h1>Product with Id ${id} Details</h1>
                    <h2>ID: ${resp.id}</h2>
                    <h2>Name: ${resp.name}</h2>
                    <h2>Price: ${resp.price}</h2>
                    <h2>Description: ${resp.desc}</h2>
                `
    res.send(result);
})
//update User
app.put("/api/product/:id",async (req,res)=>{
    const id= req.params.id;
    await storage.updateItem(id,req.body);
    res.send("User Updated")
})
//remove User
app.delete("/api/product/:id",async (req,res)=>{
    const id= req.params.id;
    await storage.removeItem(id);
    res.send("Removed");
})

app.listen(5000,()=>{
    console.log("Server Started")
})