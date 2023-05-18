const { Console } = require('console');
const {MongoClient} = require('mongodb');

const client= new MongoClient('mongodb://localhost:27017/todolist');

// client.connect()
// .then((res)=>{console.log("Connected")})
// .catch((err)=>console.log("Error while connecting ",err));

//sync 
async function connect(){
    try {
        const conn=await client.connect();
        console.log("Connected")
    } catch (error) {
        console.log("Error")
    }
}
connect();

// const test=client.db().collection('mysample');
// //with this test object you can do all crud operations.
// console.log(test)