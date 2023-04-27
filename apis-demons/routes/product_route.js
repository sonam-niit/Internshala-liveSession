const express = require('express');

const { getAllProducts, createNewProduct, deleteProduct, getProductById, updateProduct } 
= require('../controllers/product_controller');

const router = express.Router();

router.route("/").get(getAllProducts).post(createNewProduct)

router.route("/:id").delete(deleteProduct).put(updateProduct).get(getProductById)

module.exports=router