const mysql = require('mysql');
const express= require('express');
//DB Connect COnfig
const conn = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: '',
    database: 'student'
})
//connect with DB
conn.connect((err)=>{
    if(err){
        console.log(err);
    }
    console.log("Connected")
})

const app= express();
app.use(express.json());//body parser

app.post("/createNew",(req,res)=>{
    const {name,email,country}= req.body;
    conn.query('insert into info (name,email,country) values(?,?,?)',
    [name,email,country]),
    (err)=>{
        if(err) throw err;
        res.status(201).json({"message":"Student Added Successfully"})
    }
});

app.listen(5000,()=>{
    console.log("App Started")
})