const { MongoClient } = require('mongodb');

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

async function connect() {
    try {
        const conn = await client.connect();
        console.log("connected");
    } catch (error) {
        console.log("Error Occured ", error)
    }
}
async function createCollection() {
    try {
        await client.connect();
        const db=client.db("mydb");
        const collection= db.collection('employee')
        console.log("collection created");
    } catch (error) {
        console.log("Error  while creating collection ", error)
    }
}
createCollection();

// client.connect()
// .then(()=>{console.log("Connected Successfully....!!!")})
// .catch(()=>{console.log("Failed to connect")})