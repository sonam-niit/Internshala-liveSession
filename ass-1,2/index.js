const express= require('express');
const fs= require('fs');

const app= express(); //express server

app.use("/file",(req,res)=>{
    const file=fs.readFileSync('index.html');
    res.send(file.toString())
})

app.use("/data",(req,res)=>{
    const html=`
        <h1>Welcome to my Express Server</h1>
        <h2>Testing</h2>
    `
    res.send(html)
})

//let's start the server
app.listen(5000,()=>{
    console.log(`Server Started on a Port No 5000`)
})