const express = require('express')
const {configureRouter} = require('./router')
const { logRequestMiddleware, errorHandler } = require('./middlewares')
const app = express()
const port = 3000

app.use(express.json())
app.use(logRequestMiddleware)
configureRouter(app)
app.use(errorHandler); //error midleware must be after configuration of router

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})