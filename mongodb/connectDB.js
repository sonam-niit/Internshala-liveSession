const mongoose= require('mongoose');

const url="mongodb://127.0.0.1:27017/"
mongoose.connect(url)
.then(()=>{console.log("Connected..!!")})
.catch((err)=>{console.log("Failed to connect....!!",err)})