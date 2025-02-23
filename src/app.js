const express = require('express')
const {configureRouter} = require('./router')
const app = express()
const port = 3000

app.use(express.json())

configureRouter(app)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})