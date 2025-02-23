const express = require('express')
const productRouter = require('./router')

const app = express()
const port = 3000

app.use(express.json())

app.get('/status', (req, res) => {
  res.send('Hello World')
})

app.use('/api/products',productRouter);
app.use('/api/user',productRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})