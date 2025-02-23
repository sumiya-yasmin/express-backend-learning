const express =require('express');
const { productServices } = require('../services');
const productRouter =express.Router();

  productRouter.get('/', (req,res)=>{
    res.send(productServices.getAllProducts())
  })
  productRouter.post('/',(req,res)=>{
//    const newProductData= req.body
   res.status(201).json(productServices.createProducts(req.body))
  })
  productRouter.put('/:id', (req,res)=>{
    const {id}=req.params;
    const payload =req.body;
   updatedProducts= productServices.updateProducts(id, payload)
    res.status(201).json(updatedProducts)

  })
  productRouter.delete('/:id',(req,res)=>{
    const {id}=req.params;
    productServices.deleteProducts(id);
    res.status(201).json({message: `Product deleted successfully`})
  })

  module.exports=productRouter;