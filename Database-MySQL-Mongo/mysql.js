var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ecommerce'
});

connection.connect((err) => {
    if (err)
        throw err;
    console.log("Connected Successfully")
})

//insert query
function insert(name, price) {
    connection.query(`insert into product (name,price) values (?,?)`,
        [name, price],
        (err) => {
            if (err)
                throw err;
            console.log("Data Inserted Successfully")
        })
}
//insert('Watch', 1900);

//fetch

function retrival() {
    connection.query("Select * from product", (err, result) => {
        if (err)
            throw err;
        console.log("Data Fetched Successfully")
        console.log(result)
    })
}
retrival();