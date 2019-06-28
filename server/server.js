const path = require('path')
const http = require('http')
var pubpath = path.join(__dirname,'../public')
const express = require('express')
const socketio = require('socket.io')

var port = process.env.port || 3000
//console.log(pubpath)
var app = express()
var server = http.createServer(app)
var io = socketio(server)
app.use(express.static(pubpath))
io.on('connection', (socket)=>{
    console.log('new user connected')
})
io.on('disconnect', (socket)=>{
    console.log('disconnected')
})
server.listen(port, ()=>{
    console.log(`server is up ${port}`)
}) 