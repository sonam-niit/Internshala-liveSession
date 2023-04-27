
users=[];

const getAllUser=(req, res) => {
    res.status(200).send(users);
}

const createNewUser=(req, res) => {
    const user= req.body;
    users.push(user);
    res.send({"message":"User created Successfully",user:user});
}

const updateUser=(req, res) => {
    const id= req.params.id;
    const newUser= req.body;
    for(let i=0;i<users.length;i++){
        let u= users[i];
        if(u.id===id){
            users[i]=newUser;
        }
    }
    res.send({"message":`User Updated successfully with id ${req.params.id}`});
}

const deleteUser=(req, res) => {
    const id= req.params.id;
    users= users.filter(i=>{
        if(i.id!==id){
            return true;
        }
        return false;
    })
    res.status(200).json({"message":`user deleted with id ${id}`})
}

const getUserById=(req, res) => {
    const id= req.params.id;
    for(let u of users){
        if(u.id===id){
            res.status(200).json(u);
            return;
        }
    }
}

module.exports=
{
    getAllUser,
    createNewUser,
    updateUser,
    deleteUser,
    getUserById
}