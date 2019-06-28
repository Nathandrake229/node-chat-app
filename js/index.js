var socket = io();
socket.on('connect', function(){
    console.log('connected to server')
})
socket.on('disconnect', function(){
    console.log('disconnected')
})
socket.on('newEmail', function(res){
    console.log('new email')
    console.log(res)
})