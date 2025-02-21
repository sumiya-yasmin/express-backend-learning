const express = require('express')
const app = express()
const port = 3000
const { v4: uuidv4 } = require('uuid');
app.use(express.json())
const products = [
    { 
      _id: uuidv4(),
      "name": "baked beans",
      "price": 0.4,
      "image": "beans.jpg",
      "type": "vegetables"
    },
    {
       _id: uuidv4(),
      "name": "hot dogs",
      "price": 1.99,
      "image": "hotdogs.jpg",
      "type": "meat"
    },
    {
       _id: uuidv4(),
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
app.get('/status', (req, res) => {
  res.send('Hello World')
})

app.get('/api/products', (req,res)=>{
 res.send(products)
})
 app.post('/api/products', (req,res)=>{
    const newProductData = req.body
    const newProduct = { _id: uuidv4(), ... newProductData}
    products.unshift(newProduct)
    res.status(201).json(newProduct)
 })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})