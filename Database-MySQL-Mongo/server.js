const express= require('express');
const { createProduct } = require('./productController');

const app= express();
app.use(express.json())

app.post("/api/product",createProduct)

app.listen(5000,()=>{
    console.log("Server Started")
})