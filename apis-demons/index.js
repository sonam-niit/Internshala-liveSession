//express server
const express= require('express');
const PORT= 5000;
const app= express();
//convert your data in json form
app.use(express.json())

app.use("/api/user",require("./routes/user_routes"));
app.use("/api/product",require("./routes/product_route"));

app.listen(PORT,()=>{
    console.log(`Express server running on port ${PORT}`)
})