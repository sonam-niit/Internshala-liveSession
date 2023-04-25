const mysql = require('mysql');

const conn = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: '',
    database: 'demodb'
})

conn.connect((err) => {
    if (err) {
        console.log(err);
    }
    console.log("connected to MySQL DB")
})

//insert Dynamic records in table
function insert(name, email, pass) {
    conn.query("insert into student (name,email,password) values (?,?,?) "
        , [name, email, pass],
        (err) => {
            if (err) {
                throw error;
            }
            console.log("Data inserted successfully in DB")
        }
    )
}
//insert("sonam","sonam@gmail.com","sonam@123");
//Get All Data from the perticular Table
function getAll() {
    conn.query("select * from student", (err, result) => {
        if (err) {
            console.log("error ocured ", err)
        }
        console.log(result)
    })
}
//getAll();
//Get student based on its ID
function getById(id) {

    conn.query(`select name,email from student where id = ${id}`, (err, result) => {
        if (err) {
            console.log("error ocured ", err)
        }
        console.log(result)
    })
}
//getById(3);

//Delete student based on its ID
function deleteById(id) {

    conn.query(`delete from student where id = ${id}`, (err, result) => {
        if (err) {
            console.log("error ocured ", err)
        }
        console.log("record Deleted successfully")

    })
}
//deleteById(1);

//update the student records
function update(name, email, pass,id) {
    conn.query("update student set name=? , email=? ,password=? where id=? "
        , [name, email, pass,id],
        (err) => {
            if (err) {
                throw error;
            }
            console.log("Data updated successfully in DB")
        }
    )
}
update("sonam soni","sonam@microsoft.com","123456789",4)