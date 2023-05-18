const conn=require('./db')

conn.connect((err)=>{
    if(err){
        console.log(err);
    }
    console.log("Connected")
})

const addStudent= (req,res)=>{
    console.log(req.body)
    const {name,email,country}= req.body;
    conn.query('insert into info (name,email,country) values(?,?,?)',
    [name,email,country]),
    (err)=>{
        if(err) throw err;
        res.status(201).json({"message":"Student Added Successfully"})
    }
}

// function insert(name,email,country){
//     conn.query('insert into info (name,email,country) values(?,?,?)',
//     [name,email,country]),
//     (err)=>{
//         if(err){
//             console.log(err);
//         }
//         console.log("Data inseted Successfully")
//     }
// }

module.exports={
    addStudent
}