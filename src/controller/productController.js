const { productServices } = require("../services")
const asyncHandler = require('express-async-handler')

const getAllProducts =asyncHandler( async(req,res)=>{
    const products = await productServices.getAllProducts()
    res.json(products)
})

const getProductById = asyncHandler( async(req,res)=>{
    const {id} = req.params;
    const product = await productServices.getProductById(id);
    res.json(product)
}

)

const createProduct = asyncHandler( async (req,res) =>{
        const newProduct = await productServices.createProducts(req.body);
        res.status(201).json(newProduct);
     })

const updateProducts = asyncHandler( async (req,res)=>{
    const {id} = req.params;
    const payload =req.body;
    const updatedProducts= await productServices.updateProducts(id, payload)
    res.status(201).json(updatedProducts);
})

const deleteProducts = asyncHandler( async (req,res)=>{
    const {id}=req.params;
    productServices.deleteProducts(id);
    res.status(204).end()
})

module.exports ={
    createProduct,
    getAllProducts,
    getProductById,
    updateProducts,
    deleteProducts,
}