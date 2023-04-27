
products=[];

const getAllProducts=(req, res) => {
    res.status(200).send(products);
}

const createNewProduct=(req, res) => {
    const product= req.body;
    products.push(product);
    res.send({"message":"Product created Successfully",product:product});
}

const updateProduct=(req, res) => {
    const id= req.params.id;
    const newProduct= req.body;
    for(let i=0;i<products.length;i++){
        let p= products[i];
        if(p.id===id){
            products[i]=newProduct;
        }
    }
    res.send({"message":`Product Updated successfully with id ${req.params.id}`});
}

const deleteProduct=(req, res) => {
    const id= req.params.id;
    products= products.filter(i=>{
        if(i.id!==id){
            return true;
        }
        return false;
    })
    res.status(200).json({"message":`product deleted with id ${id}`})
}

const getProductById=(req, res) => {
    const id= req.params.id;
    for(let p of products){
        if(p.id===id){
            res.status(200).json(u);
            return;
        }
    }
}

module.exports=
{
    getAllProducts,
    getProductById,
    createNewProduct,
    updateProduct,deleteProduct
}