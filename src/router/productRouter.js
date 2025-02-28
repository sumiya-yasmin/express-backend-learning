const express =require('express');
const { productServices } = require('../services');
const { productController } = require('../controller');
const productRouter =express.Router();

  productRouter.get('/', productController.getAllProducts)
  
  productRouter.post('/', productController.createProduct)
  productRouter.get('/:id',productController.getProductById)

  productRouter.put('/:id', productController.updateProducts)


  productRouter.delete('/:id', productController.deleteProducts)

  module.exports=productRouter;