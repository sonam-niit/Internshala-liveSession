const express = require("express");
const storage = require('node-persist');

storage.init()

const app = express();
app.use(express.json());//body parser

app.post("/data", async (req, res) => {

    let data=[];//empty array
    if (await storage.length() > 0) {
        data =await storage.getItem("data");
    }
    data.push(req.body);
    await storage.setItem("data",data);
    res.send("Data Inserted")
})
app.get("/data",async(req,res)=>{
    const data =await storage.getItem("data");
    res.send(data);
})
app.listen(5000,()=>{console.log("server started")})