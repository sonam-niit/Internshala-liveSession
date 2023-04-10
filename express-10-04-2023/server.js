//express server
const express= require('express');
const errorHandler = require('./middleware/errorHandler');
const dotenv= require('dotenv').config();

const app= express();
app.use(express.json())
app.use("/app/contacts",require("./routes/contactRoutes"))
app.use(errorHandler)
const port=  process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`Server is running on port: ${port}`)
})