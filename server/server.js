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
    
    socket.on('disconnect', (socket)=>{
        console.log('disconnected')
    socket.on('createmes', (res)=>{
        console.log(res)
        io.emit('newmes', {
            from:res.from,
            text: res.text,
            createat: new Date().getTime ()
        })
    })    
})

})

server.listen(port, ()=>{
    console.log(`server is up ${port}`)
}) 
 