const {MongoClient}= require('mongodb');

const url="mongodb://127.0.0.1:27017/"
const client= new MongoClient(url);

client.connect()
.then(()=>{console.log("Connected..!!!")})
.catch((err)=>{console.log('Failed to connect: ',err)})