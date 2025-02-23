const express =require('express');
const productRouter =express();
const { v4: uuidv4 } = require('uuid');
app.use(express.json())

const products = [
    { 
      _id: 'd3062d9f-8d55-4a0c-8ac5-eb5d728f20a1',
      "name": "baked beans",
      "price": 0.4,
      "image": "beans.jpg",
      "type": "vegetables"
    },
    {
       _id: '1ee6490b-47e1-4269-8450-8d55469619f8',
      "name": "hot dogs",
      "price": 1.99,
      "image": "hotdogs.jpg",
      "type": "meat"
    },
    {
       _id: '89ac8699-2411-44c0-8dd3-9d66233b0a54',
      "name": "spam",
      "price": 2.85,
      "image": "spam.jpg",
      "type": "meat"
    },
    {   _id: uuidv4(),
      "name": "refried beans",
      "price": 0.99,
      "image": "refried.jpg",
      "type": "vegetables"
    },
    {
        _id: uuidv4(),
      "name": "kidney beans",
      "price": 0.58,
      "image": "kidney.jpg",
      "type": "vegetables"
    },
    {
        _id: uuidv4(),
      "name": "garden peas",
      "price": 0.52,
      "image": "gardenpeas.jpg",
      "type": "vegetables"
    },
    {
        _id: uuidv4(),
      "name": "mushy peas",
      "price": 0.58,
      "image": "mushypeas.jpg",
      "type": "vegetables"
    },
    {
        _id: uuidv4(),
      "name": "corned beef",
      "price": 2.39,
      "image": "cornedbeef.jpg",
      "type": "meat"
    },
    {
        _id: uuidv4(),
      "name": "tomato soup",
      "price": 1.4,
      "image": "tomatosoup.jpg",
      "type": "soup"
    },
    {
        _id: uuidv4(),
      "name": "chopped tomatoes",
      "price": 0.45,
      "image": "tomato.jpg",
      "type": "vegetables"
    },
    {
        _id: uuidv4(),
      "name": "chicken noodle soup",
      "price": 1.89,
      "image": "chickennoodle.jpg",
      "type": "soup"
    },
    {
        _id: uuidv4(),
      "name": "carrot and coriander soup",
      "price": 1.49,
      "image": "carrotcoriander.jpg",
      "type": "soup"
    }
  ]

  productRouter.get('/', (req,res)=>{
    res.send(products)
  })
  productRouter.post('/',(req,res)=>{
   const newProductData= req.body
   const newProduct = {_id:uuidv4(), ...newProductData}
   products.unshift(newProduct)
   res.status(201).json(newProduct)
  })
  productRouter.put('/:id', (req,res)=>{
    const {id}=req.params;
    const payload =req.body;
    const updatedProductIndex = products.findIndex((product)=>product._id===id);
    if(updatedProductIndex===-1){
        return res.status(400).json({message: `No product found with index ${id}`})
    }
    products[updatedProductIndex]={...products[updatedProductIndex],...payload}
    res.status(201).json(products[updatedProductIndex])

  })
  productRouter.delete('/:id',(req,res)=>{
    const {id}=req.params;
    const productIndex = products.findIndex((product)=>product._id===id);
    if(productIndex===-1){
        return res.status(400).json({message: `No product found with index ${id}`})
    }
    products.splice(productIndex,1)
    res.status(201).json({message: `Product deleted successfully`})
  })

  module.exports=productRouter;