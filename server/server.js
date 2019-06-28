const path = require('path')
var pubpath = path.join(__dirname,'../public')
const express = require('express')
var port = process.env.PORT || 3000
//console.log(pubpath)
var app = express()
app.use(express.static(pubpath))
app.get('/', (req, res)=>{
    res.send('it is up')
})
app.listen(port, ()=>{
    console.log(`server is up ${port}`)
})