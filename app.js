var express = require('express')
var userRouter = require('./user/controller')
var app= express()
app.use(express.json())
app.use('/users', userRouter)
var http = require('http')
var server = http.createServer(app)
server.listen(3000,()=>{
    console.log('server started !');
})