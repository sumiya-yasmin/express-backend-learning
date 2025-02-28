const { v4: uuidv4 } = require('uuid');
const { NotFoundError } = require('../errors');
const { Product } = require('../models');
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

  const getAllProducts =async () => {
     const products = await Product.find({deleted: false});
     return products
  }

  const getProductById = async (id) =>{
    const product = await Product.findOne({_id: id, deleted: false}).select('_id name price image categories');
    return product;
  }

  const createProducts = async (productPayload)=>{
    const newProduct = new Product(productPayload)
   await newProduct.save();
     return newProduct;
  }
  const updateProducts = async(id,payload)=>{
    return await Product.findByIdAndUpdate({_id:id}, payload)
  }

  const deleteProducts =async (id)=>{
     await Product.findOneAndDelete(
      {_id:id},
      {deleted: true, deletedAt: new Date()}
    );
    return true;
  }
  module.exports ={
    getAllProducts,
    getProductById,
    createProducts,
    updateProducts,
    deleteProducts
  }