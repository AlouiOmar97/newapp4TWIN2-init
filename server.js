var express = require('express')
var app= express()
var userRouter = require('./controller/userController')
var mongoose = require('mongoose')
app.use(express.json())
mongoose.connect('mongodb://localhost:27017/user-db')
        .then(()=>{
            console.log("DB Connected !");
        })
        .catch((error)=>{
            console.log("error : "+ error);
        })
app.use('/users', userRouter)
var http = require('http')
var server = http.createServer(app)
server.listen(3000,()=>{
    console.log('server started !');
})