const { MongoClient } = require('mongodb')
const client=new MongoClient('mongodb://localhost:27017/sampleapp');
//DB Connect
client.connect();
//create collection
const collection=client.db().collection('employee');
//Data Insertion
async function insert(object){
    try {
        await collection.insertOne(object);
        console.log("Data Inserted")
      } catch (error) {
        console.log("Error ",error )
      }
}
async function fetchData(){
    try {
        const findResult=await collection.find({}).toArray();
        console.log('Found documents =>', findResult);
    } catch (error) {
        console.log("Error ",error )
    }
}
//insert({name:"sonam",email:"sonam@gmail.com",country:"India"})
fetchData();