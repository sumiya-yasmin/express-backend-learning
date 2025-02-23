const {logRequestMiddleware} = require('./logMiddleware')
const {errorHandlerMiddleware} = require('./errorHandler')
module.exports={
    logRequestMiddleware,
    errorHandlerMiddleware
}