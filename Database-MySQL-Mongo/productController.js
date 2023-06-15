const mysql= require('mysql');
const connection= mysql.createConnection({
    host:"localhost",
    user:"root",
    password:'',
    database:'ecommerce'
})
connection.connect(()=>console.log("Connected"))
const createProduct= (req,res)=>{

    const {name,price}=req.body;
    connection.query('insert into product (name,price) values(?,?)',
    [name,price],(err)=>{
        if(err)
            throw err
        res.status(201).json({message:"Data inserted"})
    })
}

module.exports={createProduct}