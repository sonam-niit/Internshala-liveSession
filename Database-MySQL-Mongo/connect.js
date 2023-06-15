const { MongoClient } = require('mongodb');

const client =new  MongoClient("mongodb://127.0.0.1:27017/ecommerce")
// MongoClient.connect("mongodb://127.0.0.1:27017/ecommerce")
// .then((resp)=>console.log("Connected",resp))
// .catch((err)=>console.log("Error Occured",err))

async function connect() {
    try {
        await client.connect();
        console.log("Connected")
        const db = client.db();
        const collection = db.collection('documents');
        console.log("Collection Created");

        const insertResult = await collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]);
        console.log('Inserted documents =>', insertResult);
    } catch (error) {
        console.log(error)
    }

}
connect();
